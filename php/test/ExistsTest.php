<?php
declare(strict_types=1);

// JikanRest SDK exists test

require_once __DIR__ . '/../jikanrest_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = JikanRestSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
