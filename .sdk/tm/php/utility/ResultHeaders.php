<?php
declare(strict_types=1);

// JikanRest SDK utility: result_headers

class JikanRestResultHeaders
{
    public static function call(JikanRestContext $ctx): ?JikanRestResult
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
