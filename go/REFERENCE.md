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
fmt.Println(arrival.GetName()) // "arrival"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `int` | No |  |
| `direction` | `string` | No |  |
| `line` | `map[string]any` | No |  |
| `planned_platform` | `string` | No |  |
| `planned_when` | `string` | No |  |
| `platform` | `string` | No |  |
| `stop` | `map[string]any` | No |  |
| `trip_id` | `string` | No |  |
| `when` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Arrival(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(departure.GetName()) // "departure"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `int` | No |  |
| `direction` | `string` | No |  |
| `line` | `map[string]any` | No |  |
| `planned_platform` | `string` | No |  |
| `planned_when` | `string` | No |  |
| `platform` | `string` | No |  |
| `stop` | `map[string]any` | No |  |
| `trip_id` | `string` | No |  |
| `when` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Departure(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(journey.GetName()) // "journey"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `leg` | `[]any` | No |  |
| `refresh_token` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Journey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(location.GetName()) // "location"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `location` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `product` | `map[string]any` | No |  |
| `type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Location(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(radar.GetName()) // "radar"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direction` | `string` | No |  |
| `line` | `map[string]any` | No |  |
| `location` | `map[string]any` | No |  |
| `next_stopover` | `[]any` | No |  |
| `trip_id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Radar(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(stop.GetName()) // "stop"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `location` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `product` | `map[string]any` | No |  |
| `station` | `map[string]any` | No |  |
| `type` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Stop(nil).Load(map[string]any{"id": "stop_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fmt.Println(trip.GetName()) // "trip"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | `map[string]any` | No |  |
| `direction` | `string` | No |  |
| `id` | `string` | No |  |
| `line` | `map[string]any` | No |  |
| `origin` | `map[string]any` | No |  |
| `stopover` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Trip(nil).Load(map[string]any{"id": "trip_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

