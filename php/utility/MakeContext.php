<?php
declare(strict_types=1);

// JikanRest SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class JikanRestMakeContext
{
    public static function call(array $ctxmap, ?JikanRestContext $basectx): JikanRestContext
    {
        return new JikanRestContext($ctxmap, $basectx);
    }
}
