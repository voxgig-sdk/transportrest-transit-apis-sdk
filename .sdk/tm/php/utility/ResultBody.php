<?php
declare(strict_types=1);

// TransportrestTransitApis SDK utility: result_body

class TransportrestTransitApisResultBody
{
    public static function call(TransportrestTransitApisContext $ctx): ?TransportrestTransitApisResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
