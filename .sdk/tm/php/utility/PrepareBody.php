<?php
declare(strict_types=1);

// JikanRest SDK utility: prepare_body

class JikanRestPrepareBody
{
    public static function call(JikanRestContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
