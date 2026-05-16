# TransportrestTransitApis Ruby SDK Reference

Complete API reference for the TransportrestTransitApis Ruby SDK.


## TransportrestTransitApisSDK

### Constructor

```ruby
require_relative 'transportrest-transit-apis_sdk'

client = TransportrestTransitApisSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
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

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

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

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## ArrivalEntity

```ruby
arrival = client.Arrival
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Arrival.list(nil)
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Departure.list(nil)
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
| `leg` | ``$ARRAY`` | No |  |
| `refresh_token` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Journey.list(nil)
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
| `id` | ``$STRING`` | No |  |
| `location` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `product` | ``$OBJECT`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Location.list(nil)
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
| `direction` | ``$STRING`` | No |  |
| `line` | ``$OBJECT`` | No |  |
| `location` | ``$OBJECT`` | No |  |
| `next_stopover` | ``$ARRAY`` | No |  |
| `trip_id` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Radar.list(nil)
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
| `id` | ``$STRING`` | No |  |
| `location` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `product` | ``$OBJECT`` | No |  |
| `station` | ``$OBJECT`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Stop.load({ "id" => "stop_id" })
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
| `destination` | ``$OBJECT`` | No |  |
| `direction` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `line` | ``$OBJECT`` | No |  |
| `origin` | ``$OBJECT`` | No |  |
| `stopover` | ``$ARRAY`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Trip.load({ "id" => "trip_id" })
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

