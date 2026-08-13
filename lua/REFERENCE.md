# TransportrestTransitApis Lua SDK Reference

Complete API reference for the TransportrestTransitApis Lua SDK.


## TransportrestTransitApisSDK

### Constructor

```lua
local sdk = require("transportrest-transit-apis_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Arrival(data)`

Create a new `Arrival` entity instance. Pass `nil` for no initial data.

#### `Departure(data)`

Create a new `Departure` entity instance. Pass `nil` for no initial data.

#### `Journey(data)`

Create a new `Journey` entity instance. Pass `nil` for no initial data.

#### `Location(data)`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `Radar(data)`

Create a new `Radar` entity instance. Pass `nil` for no initial data.

#### `Stop(data)`

Create a new `Stop` entity instance. Pass `nil` for no initial data.

#### `Trip(data)`

Create a new `Trip` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ArrivalEntity

```lua
local arrival = client:Arrival(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `number` | No |  |
| `direction` | `string` | No |  |
| `line` | `table` | No |  |
| `plannedPlatform` | `string` | No |  |
| `plannedWhen` | `string` | No |  |
| `platform` | `string` | No |  |
| `stop` | `table` | No |  |
| `tripId` | `string` | No |  |
| `when` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Arrival():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArrivalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DepartureEntity

```lua
local departure = client:Departure(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `number` | No |  |
| `direction` | `string` | No |  |
| `line` | `table` | No |  |
| `plannedPlatform` | `string` | No |  |
| `plannedWhen` | `string` | No |  |
| `platform` | `string` | No |  |
| `stop` | `table` | No |  |
| `tripId` | `string` | No |  |
| `when` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Departure():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DepartureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JourneyEntity

```lua
local journey = client:Journey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `legs` | `table` | No |  |
| `refreshToken` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Journey():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JourneyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LocationEntity

```lua
local location = client:Location(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `location` | `table` | No |  |
| `name` | `string` | No |  |
| `products` | `table` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Location():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RadarEntity

```lua
local radar = client:Radar(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direction` | `string` | No |  |
| `line` | `table` | No |  |
| `location` | `table` | No |  |
| `nextStopovers` | `table` | No |  |
| `tripId` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Radar():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RadarEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StopEntity

```lua
local stop = client:Stop(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `location` | `table` | No |  |
| `name` | `string` | No |  |
| `products` | `table` | No |  |
| `station` | `table` | No |  |
| `type` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Stop():load({ id = "stop_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StopEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TripEntity

```lua
local trip = client:Trip(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | `table` | No |  |
| `direction` | `string` | No |  |
| `id` | `string` | No |  |
| `line` | `table` | No |  |
| `origin` | `table` | No |  |
| `stopovers` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Trip():load({ id = "trip_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TripEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

