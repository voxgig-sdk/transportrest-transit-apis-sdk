# TransportrestTransitApis Golang SDK Reference

Complete API reference for the TransportrestTransitApis Golang SDK.


## TransportrestTransitApisSDK

### Constructor

```go
func NewTransportrestTransitApisSDK(options map[string]any) *TransportrestTransitApisSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *TransportrestTransitApisSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *TransportrestTransitApisSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Arrival(data map[string]any) TransportrestTransitApisEntity`

Create a new `Arrival` entity instance. Pass `nil` for no initial data.

#### `Departure(data map[string]any) TransportrestTransitApisEntity`

Create a new `Departure` entity instance. Pass `nil` for no initial data.

#### `Journey(data map[string]any) TransportrestTransitApisEntity`

Create a new `Journey` entity instance. Pass `nil` for no initial data.

#### `Location(data map[string]any) TransportrestTransitApisEntity`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `Radar(data map[string]any) TransportrestTransitApisEntity`

Create a new `Radar` entity instance. Pass `nil` for no initial data.

#### `Stop(data map[string]any) TransportrestTransitApisEntity`

Create a new `Stop` entity instance. Pass `nil` for no initial data.

#### `Trip(data map[string]any) TransportrestTransitApisEntity`

Create a new `Trip` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ArrivalEntity

```go
arrival := client.Arrival(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Arrival(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ArrivalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DepartureEntity

```go
departure := client.Departure(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Departure(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DepartureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## JourneyEntity

```go
journey := client.Journey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `leg` | ``$ARRAY`` | No |  |
| `refresh_token` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Journey(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `JourneyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LocationEntity

```go
location := client.Location(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Location(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RadarEntity

```go
radar := client.Radar(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Radar(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RadarEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StopEntity

```go
stop := client.Stop(nil)
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Stop(nil).Load(map[string]any{"id": "stop_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StopEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TripEntity

```go
trip := client.Trip(nil)
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Trip(nil).Load(map[string]any{"id": "trip_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TripEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewTransportrestTransitApisSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

