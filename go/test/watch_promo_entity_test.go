package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/jikan-rest-sdk/go"
	"github.com/voxgig-sdk/jikan-rest-sdk/go/core"

	vs "github.com/voxgig-sdk/jikan-rest-sdk/go/utility/struct"
)

func TestWatchPromoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WatchPromo(nil)
		if ent == nil {
			t.Fatal("expected non-nil WatchPromoEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := watch_promoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "watch_promo." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set JIKANREST_TEST_WATCH_PROMO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		watchPromoRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.watch_promo", setup.data)))
		var watchPromoRef01Data map[string]any
		if len(watchPromoRef01DataRaw) > 0 {
			watchPromoRef01Data = core.ToMapAny(watchPromoRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = watchPromoRef01Data

		// LIST
		watchPromoRef01Ent := client.WatchPromo(nil)
		watchPromoRef01Match := map[string]any{}

		watchPromoRef01ListResult, err := watchPromoRef01Ent.List(watchPromoRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, watchPromoRef01ListOk := watchPromoRef01ListResult.([]any)
		if !watchPromoRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", watchPromoRef01ListResult)
		}

	})
}

func watch_promoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "watch_promo", "WatchPromoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read watch_promo test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse watch_promo test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"watch_promo01", "watch_promo02", "watch_promo03"},
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
	entidEnvRaw := os.Getenv("JIKANREST_TEST_WATCH_PROMO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"JIKANREST_TEST_WATCH_PROMO_ENTID": idmap,
		"JIKANREST_TEST_LIVE":      "FALSE",
		"JIKANREST_TEST_EXPLAIN":   "FALSE",
		"JIKANREST_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["JIKANREST_TEST_WATCH_PROMO_ENTID"])
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
