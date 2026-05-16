<?php
declare(strict_types=1);

// TransportrestTransitApis SDK exists test

require_once __DIR__ . '/../transportresttransitapis_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TransportrestTransitApisSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
