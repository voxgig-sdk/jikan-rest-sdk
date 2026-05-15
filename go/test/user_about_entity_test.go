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

func TestUserAboutEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UserAbout(nil)
		if ent == nil {
			t.Fatal("expected non-nil UserAboutEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := user_aboutBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "user_about." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set JIKANREST_TEST_USER_ABOUT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		userAboutRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.user_about", setup.data)))
		var userAboutRef01Data map[string]any
		if len(userAboutRef01DataRaw) > 0 {
			userAboutRef01Data = core.ToMapAny(userAboutRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = userAboutRef01Data

		// LIST
		userAboutRef01Ent := client.UserAbout(nil)
		userAboutRef01Match := map[string]any{
			"username": setup.idmap["username01"],
		}

		userAboutRef01ListResult, err := userAboutRef01Ent.List(userAboutRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, userAboutRef01ListOk := userAboutRef01ListResult.([]any)
		if !userAboutRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", userAboutRef01ListResult)
		}

	})
}

func user_aboutBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "user_about", "UserAboutTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read user_about test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse user_about test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"user_about01", "user_about02", "user_about03", "users01", "users02", "users03", "username01"},
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
	entidEnvRaw := os.Getenv("JIKANREST_TEST_USER_ABOUT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"JIKANREST_TEST_USER_ABOUT_ENTID": idmap,
		"JIKANREST_TEST_LIVE":      "FALSE",
		"JIKANREST_TEST_EXPLAIN":   "FALSE",
		"JIKANREST_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["JIKANREST_TEST_USER_ABOUT_ENTID"])
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
