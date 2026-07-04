<?php
declare(strict_types=1);

// Typed models for the TransportrestTransitApis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Arrival entity data model. */
class Arrival
{
    public ?int $delay = null;
    public ?string $direction = null;
    public ?array $line = null;
    public ?string $planned_platform = null;
    public ?string $planned_when = null;
    public ?string $platform = null;
    public ?array $stop = null;
    public ?string $trip_id = null;
    public ?string $when = null;
}

/** Request payload for Arrival#list. */
class ArrivalListMatch
{
    public string $stop_id;
}

/** Departure entity data model. */
class Departure
{
    public ?int $delay = null;
    public ?string $direction = null;
    public ?array $line = null;
    public ?string $planned_platform = null;
    public ?string $planned_when = null;
    public ?string $platform = null;
    public ?array $stop = null;
    public ?string $trip_id = null;
    public ?string $when = null;
}

/** Request payload for Departure#list. */
class DepartureListMatch
{
    public string $stop_id;
}

/** Journey entity data model. */
class Journey
{
    public ?array $leg = null;
    public ?string $refresh_token = null;
    public ?string $type = null;
}

/** Match filter for Journey#list (any subset of Journey fields). */
class JourneyListMatch
{
    public ?array $leg = null;
    public ?string $refresh_token = null;
    public ?string $type = null;
}

/** Location entity data model. */
class Location
{
    public ?string $id = null;
    public ?array $location = null;
    public ?string $name = null;
    public ?array $product = null;
    public ?string $type = null;
}

/** Match filter for Location#list (any subset of Location fields). */
class LocationListMatch
{
    public ?string $id = null;
    public ?array $location = null;
    public ?string $name = null;
    public ?array $product = null;
    public ?string $type = null;
}

/** Radar entity data model. */
class Radar
{
    public ?string $direction = null;
    public ?array $line = null;
    public ?array $location = null;
    public ?array $next_stopover = null;
    public ?string $trip_id = null;
}

/** Match filter for Radar#list (any subset of Radar fields). */
class RadarListMatch
{
    public ?string $direction = null;
    public ?array $line = null;
    public ?array $location = null;
    public ?array $next_stopover = null;
    public ?string $trip_id = null;
}

/** Stop entity data model. */
class Stop
{
    public ?string $id = null;
    public ?array $location = null;
    public ?string $name = null;
    public ?array $product = null;
    public ?array $station = null;
    public ?string $type = null;
}

/** Request payload for Stop#load. */
class StopLoadMatch
{
    public string $id;
}

/** Trip entity data model. */
class Trip
{
    public ?array $destination = null;
    public ?string $direction = null;
    public ?string $id = null;
    public ?array $line = null;
    public ?array $origin = null;
    public ?array $stopover = null;
}

/** Request payload for Trip#load. */
class TripLoadMatch
{
    public string $id;
}

