package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/jikan-rest-sdk"
	"github.com/voxgig-sdk/jikan-rest-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestUserStatisticEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UserStatistic(nil)
		if ent == nil {
			t.Fatal("expected non-nil UserStatisticEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := user_statisticBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "user_statistic." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set JIKANREST_TEST_USER_STATISTIC_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		userStatisticRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.user_statistic", setup.data)))
		var userStatisticRef01Data map[string]any
		if len(userStatisticRef01DataRaw) > 0 {
			userStatisticRef01Data = core.ToMapAny(userStatisticRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = userStatisticRef01Data

		// LOAD
		userStatisticRef01Ent := client.UserStatistic(nil)
		userStatisticRef01MatchDt0 := map[string]any{}
		userStatisticRef01DataDt0Loaded, err := userStatisticRef01Ent.Load(userStatisticRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if userStatisticRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func user_statisticBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "user_statistic", "UserStatisticTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read user_statistic test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse user_statistic test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"user_statistic01", "user_statistic02", "user_statistic03", "users01", "users02", "users03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("JIKANREST_TEST_USER_STATISTIC_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"JIKANREST_TEST_USER_STATISTIC_ENTID": idmap,
		"JIKANREST_TEST_LIVE":      "FALSE",
		"JIKANREST_TEST_EXPLAIN":   "FALSE",
		"JIKANREST_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["JIKANREST_TEST_USER_STATISTIC_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["JIKANREST_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["JIKANREST_APIKEY"],
			},
			extra,
		})
		client = sdk.NewJikanRestSDK(core.ToMapAny(mergedOpts))
	}

	live := env["JIKANREST_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["JIKANREST_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
