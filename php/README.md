# TransportrestTransitApis PHP SDK



The PHP SDK for the TransportrestTransitApis API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Arrival()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/transportrest-transit-apis-sdk/releases](https://github.com/voxgig-sdk/transportrest-transit-apis-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'transportresttransitapis_sdk.php';

$client = new TransportrestTransitApisSDK();
```

### 2. List arrival records

```php
try {
    // list() returns an array of Arrival records — iterate directly.
    $arrivals = $client->Arrival()->list();
    foreach ($arrivals as $item) {
        echo $item["delay"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $locations = $client->Location()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = TransportrestTransitApisSDK::test();

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$location = $client->Location()->list();
print_r($location);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new TransportrestTransitApisSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### TransportrestTransitApisSDK

```php
require_once 'transportresttransitapis_sdk.php';
$client = new TransportrestTransitApisSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = TransportrestTransitApisSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### TransportrestTransitApisSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Arrival` | `($data): ArrivalEntity` | Create an Arrival entity instance. |
| `Departure` | `($data): DepartureEntity` | Create a Departure entity instance. |
| `Journey` | `($data): JourneyEntity` | Create a Journey entity instance. |
| `Location` | `($data): LocationEntity` | Create a Location entity instance. |
| `Radar` | `($data): RadarEntity` | Create a Radar entity instance. |
| `Stop` | `($data): StopEntity` | Create a Stop entity instance. |
| `Trip` | `($data): TripEntity` | Create a Trip entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Arrival

| Field | Description |
| --- | --- |
| `delay` | Delay in seconds |
| `direction` | Direction of the trip |
| `line` |  |
| `plannedPlatform` | Originally planned platform |
| `plannedWhen` | Originally planned arrival time |
| `platform` | Arrival platform |
| `stop` |  |
| `tripId` | Trip identifier |
| `when` | Scheduled arrival time |

Operations: List.

API path: `/stops/{id}/arrivals`

#### Departure

| Field | Description |
| --- | --- |
| `delay` | Delay in seconds |
| `direction` | Direction of the trip |
| `line` |  |
| `plannedPlatform` | Originally planned platform |
| `plannedWhen` | Originally planned departure time |
| `platform` | Departure platform |
| `stop` |  |
| `tripId` | Trip identifier |
| `when` | Scheduled departure time |

Operations: List.

API path: `/stops/{id}/departures`

#### Journey

| Field | Description |
| --- | --- |
| `legs` | Journey legs |
| `refreshToken` | Token to refresh this journey |
| `type` |  |

Operations: List.

API path: `/journeys`

#### Location

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the location |
| `location` |  |
| `name` | Name of the location |
| `products` | Available products at this location |
| `type` | Type of location |

Operations: List.

API path: `/locations`

#### Radar

| Field | Description |
| --- | --- |
| `direction` | Direction of the movement |
| `line` |  |
| `location` |  |
| `nextStopovers` |  |
| `tripId` | Trip identifier |

Operations: List.

API path: `/radar`

#### Stop

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the stop |
| `location` |  |
| `name` | Name of the stop |
| `products` | Available products at this stop |
| `station` | Parent station if applicable |
| `type` |  |

Operations: Load.

API path: `/stops/{id}`

#### Trip

| Field | Description |
| --- | --- |
| `destination` |  |
| `direction` | Direction of the trip |
| `id` | Trip identifier |
| `line` |  |
| `origin` |  |
| `stopovers` |  |

Operations: Load.

API path: `/trips/{id}`



## Entities


### Arrival

Create an instance: `$arrival = $client->Arrival();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `delay` | `int` | Delay in seconds |
| `direction` | `string` | Direction of the trip |
| `line` | `array` |  |
| `plannedPlatform` | `string` | Originally planned platform |
| `plannedWhen` | `string` | Originally planned arrival time |
| `platform` | `string` | Arrival platform |
| `stop` | `array` |  |
| `tripId` | `string` | Trip identifier |
| `when` | `string` | Scheduled arrival time |

#### Example: List

```php
// list() returns an array of Arrival records (throws on error).
$arrivals = $client->Arrival()->list();
```


### Departure

Create an instance: `$departure = $client->Departure();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `delay` | `int` | Delay in seconds |
| `direction` | `string` | Direction of the trip |
| `line` | `array` |  |
| `plannedPlatform` | `string` | Originally planned platform |
| `plannedWhen` | `string` | Originally planned departure time |
| `platform` | `string` | Departure platform |
| `stop` | `array` |  |
| `tripId` | `string` | Trip identifier |
| `when` | `string` | Scheduled departure time |

#### Example: List

```php
// list() returns an array of Departure records (throws on error).
$departures = $client->Departure()->list();
```


### Journey

Create an instance: `$journey = $client->Journey();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `legs` | `array` | Journey legs |
| `refreshToken` | `string` | Token to refresh this journey |
| `type` | `string` |  |

#### Example: List

```php
// list() returns an array of Journey records (throws on error).
$journeys = $client->Journey()->list();
```


### Location

Create an instance: `$location = $client->Location();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the location |
| `location` | `array` |  |
| `name` | `string` | Name of the location |
| `products` | `array` | Available products at this location |
| `type` | `string` | Type of location |

#### Example: List

```php
// list() returns an array of Location records (throws on error).
$locations = $client->Location()->list();
```


### Radar

Create an instance: `$radar = $client->Radar();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direction` | `string` | Direction of the movement |
| `line` | `array` |  |
| `location` | `array` |  |
| `nextStopovers` | `array` |  |
| `tripId` | `string` | Trip identifier |

#### Example: List

```php
// list() returns an array of Radar records (throws on error).
$radars = $client->Radar()->list();
```


### Stop

Create an instance: `$stop = $client->Stop();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the stop |
| `location` | `array` |  |
| `name` | `string` | Name of the stop |
| `products` | `array` | Available products at this stop |
| `station` | `array` | Parent station if applicable |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Stop record (throws on error).
$stop = $client->Stop()->load(["id" => "stop_id"]);
```


### Trip

Create an instance: `$trip = $client->Trip();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination` | `array` |  |
| `direction` | `string` | Direction of the trip |
| `id` | `string` | Trip identifier |
| `line` | `array` |  |
| `origin` | `array` |  |
| `stopovers` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Trip record (throws on error).
$trip = $client->Trip()->load(["id" => "trip_id"]);
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── transportresttransitapis_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`transportresttransitapis_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$location = $client->Location();
$location->list();

// $location->data_get() now returns the location data from the last list
// $location->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
