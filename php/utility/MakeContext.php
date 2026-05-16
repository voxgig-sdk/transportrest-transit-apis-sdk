<?php
declare(strict_types=1);

// TransportrestTransitApis SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TransportrestTransitApisMakeContext
{
    public static function call(array $ctxmap, ?TransportrestTransitApisContext $basectx): TransportrestTransitApisContext
    {
        return new TransportrestTransitApisContext($ctxmap, $basectx);
    }
}
