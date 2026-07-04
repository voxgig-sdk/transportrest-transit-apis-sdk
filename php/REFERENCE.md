# TransportrestTransitApis PHP SDK Reference

Complete API reference for the TransportrestTransitApis PHP SDK.


## TransportrestTransitApisSDK

### Constructor

```php
require_once __DIR__ . '/transportrest-transit-apis_sdk.php';

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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

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
$arrival = $client->arrival();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | ``$INTEGER`` | No |  |
| `direction` | ``$STRING`` | No |  |
| `line` | ``$OBJECT`` | No |  |
| `planned_platform` | ``$STRING`` | No |  |
| `planned_when` | ``$STRING`` | No |  |
| `platform` | ``$STRING`` | No |  |
| `stop` | ``$OBJECT`` | No |  |
| `trip_id` | ``$STRING`` | No |  |
| `when` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->arrival()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ArrivalEntity`

Create a new `ArrivalEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## DepartureEntity

```php
$departure = $client->departure();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | ``$INTEGER`` | No |  |
| `direction` | ``$STRING`` | No |  |
| `line` | ``$OBJECT`` | No |  |
| `planned_platform` | ``$STRING`` | No |  |
| `planned_when` | ``$STRING`` | No |  |
| `platform` | ``$STRING`` | No |  |
| `stop` | ``$OBJECT`` | No |  |
| `trip_id` | ``$STRING`` | No |  |
| `when` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->departure()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): DepartureEntity`

Create a new `DepartureEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## JourneyEntity

```php
$journey = $client->journey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `leg` | ``$ARRAY`` | No |  |
| `refresh_token` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->journey()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): JourneyEntity`

Create a new `JourneyEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## LocationEntity

```php
$location = $client->location();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | No |  |
| `location` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `product` | ``$OBJECT`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->location()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): LocationEntity`

Create a new `LocationEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RadarEntity

```php
$radar = $client->radar();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direction` | ``$STRING`` | No |  |
| `line` | ``$OBJECT`` | No |  |
| `location` | ``$OBJECT`` | No |  |
| `next_stopover` | ``$ARRAY`` | No |  |
| `trip_id` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->radar()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RadarEntity`

Create a new `RadarEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## StopEntity

```php
$stop = $client->stop();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$STRING`` | No |  |
| `location` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `product` | ``$OBJECT`` | No |  |
| `station` | ``$OBJECT`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->stop()->load(["id" => "stop_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): StopEntity`

Create a new `StopEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## TripEntity

```php
$trip = $client->trip();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | ``$OBJECT`` | No |  |
| `direction` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `line` | ``$OBJECT`` | No |  |
| `origin` | ``$OBJECT`` | No |  |
| `stopover` | ``$ARRAY`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->trip()->load(["id" => "trip_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): TripEntity`

Create a new `TripEntity` instance with the same client and
options.

#### `getName(): string`

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

