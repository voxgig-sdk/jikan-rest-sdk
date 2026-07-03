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

func TestClubEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Club(nil)
		if ent == nil {
			t.Fatal("expected non-nil ClubEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := clubBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "club." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set JIKANREST_TEST_CLUB_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		clubRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.club", setup.data)))
		var clubRef01Data map[string]any
		if len(clubRef01DataRaw) > 0 {
			clubRef01Data = core.ToMapAny(clubRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = clubRef01Data

		// LIST
		clubRef01Ent := client.Club(nil)
		clubRef01Match := map[string]any{}

		clubRef01ListResult, err := clubRef01Ent.List(clubRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, clubRef01ListOk := clubRef01ListResult.([]any)
		if !clubRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", clubRef01ListResult)
		}

		// LOAD
		clubRef01MatchDt0 := map[string]any{}
		clubRef01DataDt0Loaded, err := clubRef01Ent.Load(clubRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if clubRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func clubBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "club", "ClubTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read club test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse club test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"club01", "club02", "club03"},
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
	entidEnvRaw := os.Getenv("JIKANREST_TEST_CLUB_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"JIKANREST_TEST_CLUB_ENTID": idmap,
		"JIKANREST_TEST_LIVE":      "FALSE",
		"JIKANREST_TEST_EXPLAIN":   "FALSE",
		"JIKANREST_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["JIKANREST_TEST_CLUB_ENTID"])
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
