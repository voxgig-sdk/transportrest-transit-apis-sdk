<?php
declare(strict_types=1);

// Arrival entity test

require_once __DIR__ . '/../transportresttransitapis_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ArrivalEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TransportrestTransitApisSDK::test(null, null);
        $ent = $testsdk->Arrival(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = arrival_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "arrival." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TRANSPORTRESTTRANSITAPIS_TEST_ARRIVAL_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $arrival_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.arrival")));
        $arrival_ref01_data = null;
        if (count($arrival_ref01_data_raw) > 0) {
            $arrival_ref01_data = Helpers::to_map($arrival_ref01_data_raw[0][1]);
        }

        // LIST
        $arrival_ref01_ent = $client->Arrival(null);
        $arrival_ref01_match = [
            "stop_id" => $setup["idmap"]["stop01"],
        ];

        $arrival_ref01_list_result = $arrival_ref01_ent->list($arrival_ref01_match, null);
        $this->assertIsArray($arrival_ref01_list_result);

    }
}

function arrival_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/arrival/ArrivalTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TransportrestTransitApisSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["arrival01", "arrival02", "arrival03", "stop01", "stop02", "stop03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TRANSPORTRESTTRANSITAPIS_TEST_ARRIVAL_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TRANSPORTRESTTRANSITAPIS_TEST_ARRIVAL_ENTID" => $idmap,
        "TRANSPORTRESTTRANSITAPIS_TEST_LIVE" => "FALSE",
        "TRANSPORTRESTTRANSITAPIS_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TRANSPORTRESTTRANSITAPIS_TEST_ARRIVAL_ENTID"]);
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
