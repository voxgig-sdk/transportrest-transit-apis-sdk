<?php
declare(strict_types=1);

// Trip entity test

require_once __DIR__ . '/../transportresttransitapis_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class TripEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TransportrestTransitApisSDK::test(null, null);
        $ent = $testsdk->Trip(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = trip_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "trip." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TRANSPORTRESTTRANSITAPIS_TEST_TRIP_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $trip_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.trip")));
        $trip_ref01_data = null;
        if (count($trip_ref01_data_raw) > 0) {
            $trip_ref01_data = Helpers::to_map($trip_ref01_data_raw[0][1]);
        }

        // LOAD
        $trip_ref01_ent = $client->Trip(null);
        $trip_ref01_match_dt0 = [
            "id" => $trip_ref01_data["id"],
        ];
        [$trip_ref01_data_dt0_loaded, $err] = $trip_ref01_ent->load($trip_ref01_match_dt0, null);
        $this->assertNull($err);
        $trip_ref01_data_dt0_load_result = Helpers::to_map($trip_ref01_data_dt0_loaded);
        $this->assertNotNull($trip_ref01_data_dt0_load_result);
        $this->assertEquals($trip_ref01_data_dt0_load_result["id"], $trip_ref01_data["id"]);

    }
}

function trip_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/trip/TripTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TransportrestTransitApisSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["trip01", "trip02", "trip03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TRANSPORTRESTTRANSITAPIS_TEST_TRIP_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TRANSPORTRESTTRANSITAPIS_TEST_TRIP_ENTID" => $idmap,
        "TRANSPORTRESTTRANSITAPIS_TEST_LIVE" => "FALSE",
        "TRANSPORTRESTTRANSITAPIS_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TRANSPORTRESTTRANSITAPIS_TEST_TRIP_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["TRANSPORTRESTTRANSITAPIS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new TransportrestTransitApisSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["TRANSPORTRESTTRANSITAPIS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["TRANSPORTRESTTRANSITAPIS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
