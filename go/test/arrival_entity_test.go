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

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const arrivalEntityLiveStrict = true


func TestArrivalEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Arrival(nil)
		if ent == nil {
			t.Fatal("expected non-nil ArrivalEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.Arrival(nil).List(map[string]any{"stop_id": 1}, nil)
		if sdkerr, ok := err.(*core.TransportrestTransitApisError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := arrivalBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "arrival." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"stop01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, arrivalEntityLiveStrict, "Live entity test blocked: needs %s via TRANSPORTREST_TRANSIT_APIS_TEST_ARRIVAL_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		arrivalRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.arrival")))
		var arrivalRef01Data map[string]any
		if len(arrivalRef01DataRaw) > 0 {
			arrivalRef01Data = core.ToMapAny(arrivalRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = arrivalRef01Data

		// LIST
		arrivalRef01Ent := client.Arrival(nil)
		arrivalRef01Match := map[string]any{
			"stop_id": setup.idmap["stop01"],
		}

		arrivalRef01ListResult, err := arrivalRef01Ent.List(arrivalRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, arrivalRef01ListOk := arrivalRef01ListResult.([]any)
		if !arrivalRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", arrivalRef01ListResult)
		}

	})
}

func arrivalBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "arrival", "ArrivalTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read arrival test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse arrival test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"arrival01", "arrival02", "arrival03", "stop01", "stop02", "stop03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("TRANSPORTREST_TRANSIT_APIS_TEST_ARRIVAL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRANSPORTREST_TRANSIT_APIS_TEST_ARRIVAL_ENTID": idmap,
		"TRANSPORTREST_TRANSIT_APIS_TEST_LIVE":      "FALSE",
		"TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["TRANSPORTREST_TRANSIT_APIS_TEST_ARRIVAL_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["TRANSPORTREST_TRANSIT_APIS_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
			},
			extraOpts,
		})
		client = sdk.NewTransportrestTransitApisSDK(core.ToMapAny(mergedOpts))
	}

	live := env["TRANSPORTREST_TRANSIT_APIS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
