package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/transportrest-transit-apis-sdk/go"
	"github.com/voxgig-sdk/transportrest-transit-apis-sdk/go/core"

	vs "github.com/voxgig-sdk/transportrest-transit-apis-sdk/go/utility/struct"
)

func TestJourneyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Journey(nil)
		if ent == nil {
			t.Fatal("expected non-nil JourneyEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := journeyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "journey." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TRANSPORTRESTTRANSITAPIS_TEST_JOURNEY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		journeyRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.journey", setup.data)))
		var journeyRef01Data map[string]any
		if len(journeyRef01DataRaw) > 0 {
			journeyRef01Data = core.ToMapAny(journeyRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = journeyRef01Data

		// LIST
		journeyRef01Ent := client.Journey(nil)
		journeyRef01Match := map[string]any{}

		journeyRef01ListResult, err := journeyRef01Ent.List(journeyRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, journeyRef01ListOk := journeyRef01ListResult.([]any)
		if !journeyRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", journeyRef01ListResult)
		}

	})
}

func journeyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "journey", "JourneyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read journey test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse journey test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"journey01", "journey02", "journey03"},
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
	entidEnvRaw := os.Getenv("TRANSPORTRESTTRANSITAPIS_TEST_JOURNEY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRANSPORTRESTTRANSITAPIS_TEST_JOURNEY_ENTID": idmap,
		"TRANSPORTRESTTRANSITAPIS_TEST_LIVE":      "FALSE",
		"TRANSPORTRESTTRANSITAPIS_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["TRANSPORTRESTTRANSITAPIS_TEST_JOURNEY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["TRANSPORTRESTTRANSITAPIS_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewTransportrestTransitApisSDK(core.ToMapAny(mergedOpts))
	}

	live := env["TRANSPORTRESTTRANSITAPIS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["TRANSPORTRESTTRANSITAPIS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
