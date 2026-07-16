<?php
declare(strict_types=1);

// TransportrestTransitApis SDK base feature

class TransportrestTransitApisBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TransportrestTransitApisContext $ctx, array $options): void {}
    public function PostConstruct(TransportrestTransitApisContext $ctx): void {}
    public function PostConstructEntity(TransportrestTransitApisContext $ctx): void {}
    public function SetData(TransportrestTransitApisContext $ctx): void {}
    public function GetData(TransportrestTransitApisContext $ctx): void {}
    public function GetMatch(TransportrestTransitApisContext $ctx): void {}
    public function SetMatch(TransportrestTransitApisContext $ctx): void {}
    public function PrePoint(TransportrestTransitApisContext $ctx): void {}
    public function PreSpec(TransportrestTransitApisContext $ctx): void {}
    public function PreRequest(TransportrestTransitApisContext $ctx): void {}
    public function PreResponse(TransportrestTransitApisContext $ctx): void {}
    public function PreResult(TransportrestTransitApisContext $ctx): void {}
    public function PreDone(TransportrestTransitApisContext $ctx): void {}
    public function PreUnexpected(TransportrestTransitApisContext $ctx): void {}
}
