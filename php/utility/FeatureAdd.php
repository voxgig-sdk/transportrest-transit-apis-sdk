<?php
declare(strict_types=1);

// TransportrestTransitApis SDK utility: feature_add

class TransportrestTransitApisFeatureAdd
{
    public static function call(TransportrestTransitApisContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
