<?php
declare(strict_types=1);

// JikanRest SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class JikanRestFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new JikanRestBaseFeature();
            case "test":
                return new JikanRestTestFeature();
            default:
                return new JikanRestBaseFeature();
        }
    }
}
