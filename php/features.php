<?php
declare(strict_types=1);

// TransportrestTransitApis SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TransportrestTransitApisFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TransportrestTransitApisBaseFeature();
            case "test":
                return new TransportrestTransitApisTestFeature();
            default:
                return new TransportrestTransitApisBaseFeature();
        }
    }
}
