# TransportrestTransitApis PHP SDK Reference

Complete API reference for the TransportrestTransitApis PHP SDK.


## TransportrestTransitApisSDK

### Constructor

```php
require_once __DIR__ . '/transportresttransitapis_sdk.php';

$client = new TransportrestTransitApisSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TransportrestTransitApisSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = TransportrestTransitApisSDK::test();
```


### Instance Methods

#### `Arrival($data = null)`

Create a new `ArrivalEntity` instance. Pass `null` for no initial data.

#### `Departure($data = null)`

Create a new `DepartureEntity` instance. Pass `null` for no initial data.

#### `Journey($data = null)`

Create a new `JourneyEntity` instance. Pass `null` for no initial data.

#### `Location($data = null)`

Create a new `LocationEntity` instance. Pass `null` for no initial data.

#### `Radar($data = null)`

Create a new `RadarEntity` instance. Pass `null` for no initial data.

#### `Stop($data = null)`

Create a new `StopEntity` instance. Pass `null` for no initial data.

#### `Trip($data = null)`

Create a new `TripEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): TransportrestTransitApisUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ArrivalEntity

```php
$arrival = $client->Arrival();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `int` | No | Delay in seconds |
| `direction` | `string` | No | Direction of the trip |
| `line` | `array` | No |  |
| `plannedPlatform` | `string` | No | Originally planned platform |
| `plannedWhen` | `string` | No | Originally planned arrival time |
| `platform` | `string` | No | Arrival platform |
| `stop` | `array` | No |  |
| `tripId` | `string` | No | Trip identifier |
| `when` | `string` | No | Scheduled arrival time |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Arrival()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ArrivalEntity`

Create a new `ArrivalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DepartureEntity

```php
$departure = $client->Departure();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `int` | No | Delay in seconds |
| `direction` | `string` | No | Direction of the trip |
| `line` | `array` | No |  |
| `plannedPlatform` | `string` | No | Originally planned platform |
| `plannedWhen` | `string` | No | Originally planned departure time |
| `platform` | `string` | No | Departure platform |
| `stop` | `array` | No |  |
| `tripId` | `string` | No | Trip identifier |
| `when` | `string` | No | Scheduled departure time |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Departure()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DepartureEntity`

Create a new `DepartureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## JourneyEntity

```php
$journey = $client->Journey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `legs` | `array` | No | Journey legs |
| `refreshToken` | `string` | No | Token to refresh this journey |
| `type` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Journey()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): JourneyEntity`

Create a new `JourneyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LocationEntity

```php
$location = $client->Location();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier for the location |
| `location` | `array` | No |  |
| `name` | `string` | No | Name of the location |
| `products` | `array` | No | Available products at this location |
| `type` | `string` | No | Type of location |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Location()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LocationEntity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RadarEntity

```php
$radar = $client->Radar();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direction` | `string` | No | Direction of the movement |
| `line` | `array` | No |  |
| `location` | `array` | No |  |
| `nextStopovers` | `array` | No |  |
| `tripId` | `string` | No | Trip identifier |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Radar()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RadarEntity`

Create a new `RadarEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StopEntity

```php
$stop = $client->Stop();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier for the stop |
| `location` | `array` | No |  |
| `name` | `string` | No | Name of the stop |
| `products` | `array` | No | Available products at this stop |
| `station` | `array` | No | Parent station if applicable |
| `type` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Stop()->load(["id" => "stop_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StopEntity`

Create a new `StopEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TripEntity

```php
$trip = $client->Trip();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | `array` | No |  |
| `direction` | `string` | No | Direction of the trip |
| `id` | `string` | No | Trip identifier |
| `line` | `array` | No |  |
| `origin` | `array` | No |  |
| `stopovers` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Trip()->load(["id" => "trip_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TripEntity`

Create a new `TripEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new TransportrestTransitApisSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

