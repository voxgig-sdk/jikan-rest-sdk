<?php
declare(strict_types=1);

// JikanRest SDK utility: feature_add

class JikanRestFeatureAdd
{
    public static function call(JikanRestContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
