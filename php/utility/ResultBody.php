<?php
declare(strict_types=1);

// JikanRest SDK utility: result_body

class JikanRestResultBody
{
    public static function call(JikanRestContext $ctx): ?JikanRestResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
