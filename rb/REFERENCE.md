# TransportrestTransitApis Ruby SDK Reference

Complete API reference for the TransportrestTransitApis Ruby SDK.


## TransportrestTransitApisSDK

### Constructor

```ruby
require_relative 'TransportrestTransitApis_sdk'

client = TransportrestTransitApisSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TransportrestTransitApisSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = TransportrestTransitApisSDK.test
```


### Instance Methods

#### `Arrival(data = nil)`

Create a new `Arrival` entity instance. Pass `nil` for no initial data.

#### `Departure(data = nil)`

Create a new `Departure` entity instance. Pass `nil` for no initial data.

#### `Journey(data = nil)`

Create a new `Journey` entity instance. Pass `nil` for no initial data.

#### `Location(data = nil)`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `Radar(data = nil)`

Create a new `Radar` entity instance. Pass `nil` for no initial data.

#### `Stop(data = nil)`

Create a new `Stop` entity instance. Pass `nil` for no initial data.

#### `Trip(data = nil)`

Create a new `Trip` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ArrivalEntity

```ruby
arrival = client.Arrival
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `Integer` | No |  |
| `direction` | `String` | No |  |
| `line` | `Hash` | No |  |
| `plannedPlatform` | `String` | No |  |
| `plannedWhen` | `String` | No |  |
| `platform` | `String` | No |  |
| `stop` | `Hash` | No |  |
| `tripId` | `String` | No |  |
| `when` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Arrival.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ArrivalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DepartureEntity

```ruby
departure = client.Departure
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `Integer` | No |  |
| `direction` | `String` | No |  |
| `line` | `Hash` | No |  |
| `plannedPlatform` | `String` | No |  |
| `plannedWhen` | `String` | No |  |
| `platform` | `String` | No |  |
| `stop` | `Hash` | No |  |
| `tripId` | `String` | No |  |
| `when` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Departure.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DepartureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## JourneyEntity

```ruby
journey = client.Journey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `legs` | `Array` | No |  |
| `refreshToken` | `String` | No |  |
| `type` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Journey.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `JourneyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LocationEntity

```ruby
location = client.Location
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `location` | `Hash` | No |  |
| `name` | `String` | No |  |
| `products` | `Hash` | No |  |
| `type` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Location.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RadarEntity

```ruby
radar = client.Radar
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direction` | `String` | No |  |
| `line` | `Hash` | No |  |
| `location` | `Hash` | No |  |
| `nextStopovers` | `Array` | No |  |
| `tripId` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Radar.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RadarEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StopEntity

```ruby
stop = client.Stop
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `location` | `Hash` | No |  |
| `name` | `String` | No |  |
| `products` | `Hash` | No |  |
| `station` | `Hash` | No |  |
| `type` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Stop.load({ "id" => "stop_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StopEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TripEntity

```ruby
trip = client.Trip
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | `Hash` | No |  |
| `direction` | `String` | No |  |
| `id` | `String` | No |  |
| `line` | `Hash` | No |  |
| `origin` | `Hash` | No |  |
| `stopovers` | `Array` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Trip.load({ "id" => "trip_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TripEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = TransportrestTransitApisSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

