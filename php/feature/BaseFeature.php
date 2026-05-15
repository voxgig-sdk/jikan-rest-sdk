<?php
declare(strict_types=1);

// JikanRest SDK base feature

class JikanRestBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(JikanRestContext $ctx, array $options): void {}
    public function PostConstruct(JikanRestContext $ctx): void {}
    public function PostConstructEntity(JikanRestContext $ctx): void {}
    public function SetData(JikanRestContext $ctx): void {}
    public function GetData(JikanRestContext $ctx): void {}
    public function GetMatch(JikanRestContext $ctx): void {}
    public function SetMatch(JikanRestContext $ctx): void {}
    public function PrePoint(JikanRestContext $ctx): void {}
    public function PreSpec(JikanRestContext $ctx): void {}
    public function PreRequest(JikanRestContext $ctx): void {}
    public function PreResponse(JikanRestContext $ctx): void {}
    public function PreResult(JikanRestContext $ctx): void {}
    public function PreDone(JikanRestContext $ctx): void {}
    public function PreUnexpected(JikanRestContext $ctx): void {}
}
