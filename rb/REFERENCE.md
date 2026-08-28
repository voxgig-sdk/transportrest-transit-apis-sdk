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
| `delay` | `Integer` | No | Delay in seconds |
| `direction` | `String` | No | Direction of the trip |
| `line` | `Hash` | No |  |
| `plannedPlatform` | `String` | No | Originally planned platform |
| `plannedWhen` | `String` | No | Originally planned arrival time |
| `platform` | `String` | No | Arrival platform |
| `stop` | `Hash` | No |  |
| `tripId` | `String` | No | Trip identifier |
| `when` | `String` | No | Scheduled arrival time |

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
| `delay` | `Integer` | No | Delay in seconds |
| `direction` | `String` | No | Direction of the trip |
| `line` | `Hash` | No |  |
| `plannedPlatform` | `String` | No | Originally planned platform |
| `plannedWhen` | `String` | No | Originally planned departure time |
| `platform` | `String` | No | Departure platform |
| `stop` | `Hash` | No |  |
| `tripId` | `String` | No | Trip identifier |
| `when` | `String` | No | Scheduled departure time |

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
| `legs` | `Array` | No | Journey legs |
| `refreshToken` | `String` | No | Token to refresh this journey |
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
| `id` | `String` | No | Unique identifier for the location |
| `location` | `Hash` | No |  |
| `name` | `String` | No | Name of the location |
| `products` | `Hash` | No | Available products at this location |
| `type` | `String` | No | Type of location |

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
| `direction` | `String` | No | Direction of the movement |
| `line` | `Hash` | No |  |
| `location` | `Hash` | No |  |
| `nextStopovers` | `Array` | No |  |
| `tripId` | `String` | No | Trip identifier |

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
| `id` | `String` | No | Unique identifier for the stop |
| `location` | `Hash` | No |  |
| `name` | `String` | No | Name of the stop |
| `products` | `Hash` | No | Available products at this stop |
| `station` | `Hash` | No | Parent station if applicable |
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
| `direction` | `String` | No | Direction of the trip |
| `id` | `String` | No | Trip identifier |
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

