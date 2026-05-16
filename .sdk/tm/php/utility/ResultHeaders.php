<?php
declare(strict_types=1);

// TransportrestTransitApis SDK utility: result_headers

class TransportrestTransitApisResultHeaders
{
    public static function call(TransportrestTransitApisContext $ctx): ?TransportrestTransitApisResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
