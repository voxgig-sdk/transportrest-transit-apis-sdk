<?php
declare(strict_types=1);

// TransportrestTransitApis SDK utility: prepare_body

class TransportrestTransitApisPrepareBody
{
    public static function call(TransportrestTransitApisContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
