# TransportrestTransitApis Python SDK Reference

Complete API reference for the TransportrestTransitApis Python SDK.


## TransportrestTransitApisSDK

### Constructor

```python
from transportresttransitapis_sdk import TransportrestTransitApisSDK

client = TransportrestTransitApisSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TransportrestTransitApisSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = TransportrestTransitApisSDK.test()
```


### Instance Methods

#### `Arrival(data=None)`

Create a new `ArrivalEntity` instance. Pass `None` for no initial data.

#### `Departure(data=None)`

Create a new `DepartureEntity` instance. Pass `None` for no initial data.

#### `Journey(data=None)`

Create a new `JourneyEntity` instance. Pass `None` for no initial data.

#### `Location(data=None)`

Create a new `LocationEntity` instance. Pass `None` for no initial data.

#### `Radar(data=None)`

Create a new `RadarEntity` instance. Pass `None` for no initial data.

#### `Stop(data=None)`

Create a new `StopEntity` instance. Pass `None` for no initial data.

#### `Trip(data=None)`

Create a new `TripEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ArrivalEntity

```python
arrival = client.Arrival()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `int` | No | Delay in seconds |
| `direction` | `str` | No | Direction of the trip |
| `line` | `dict` | No |  |
| `plannedPlatform` | `str` | No | Originally planned platform |
| `plannedWhen` | `str` | No | Originally planned arrival time |
| `platform` | `str` | No | Arrival platform |
| `stop` | `dict` | No |  |
| `tripId` | `str` | No | Trip identifier |
| `when` | `str` | No | Scheduled arrival time |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Arrival().list({"stop_id": "example"})
for arrival in results:
    print(arrival)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArrivalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DepartureEntity

```python
departure = client.Departure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `int` | No | Delay in seconds |
| `direction` | `str` | No | Direction of the trip |
| `line` | `dict` | No |  |
| `plannedPlatform` | `str` | No | Originally planned platform |
| `plannedWhen` | `str` | No | Originally planned departure time |
| `platform` | `str` | No | Departure platform |
| `stop` | `dict` | No |  |
| `tripId` | `str` | No | Trip identifier |
| `when` | `str` | No | Scheduled departure time |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Departure().list({"stop_id": "example"})
for departure in results:
    print(departure)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DepartureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JourneyEntity

```python
journey = client.Journey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `legs` | `list` | No | Journey legs |
| `refreshToken` | `str` | No | Token to refresh this journey |
| `type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Journey().list({"from": "example", "to": "example"})
for journey in results:
    print(journey)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JourneyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LocationEntity

```python
location = client.Location()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No | Unique identifier for the location |
| `location` | `dict` | No |  |
| `name` | `str` | No | Name of the location |
| `products` | `dict` | No | Available products at this location |
| `type` | `str` | No | Type of location |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Location().list({"query": "example"})
for location in results:
    print(location)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LocationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RadarEntity

```python
radar = client.Radar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direction` | `str` | No | Direction of the movement |
| `line` | `dict` | No |  |
| `location` | `dict` | No |  |
| `nextStopovers` | `list` | No |  |
| `tripId` | `str` | No | Trip identifier |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Radar().list({"east": 1, "north": 1, "south": 1, "west": 1})
for radar in results:
    print(radar)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RadarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StopEntity

```python
stop = client.Stop()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No | Unique identifier for the stop |
| `location` | `dict` | No |  |
| `name` | `str` | No | Name of the stop |
| `products` | `dict` | No | Available products at this stop |
| `station` | `dict` | No | Parent station if applicable |
| `type` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Stop().load({"id": "stop_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StopEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TripEntity

```python
trip = client.Trip()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | `dict` | No |  |
| `direction` | `str` | No | Direction of the trip |
| `id` | `str` | No | Trip identifier |
| `line` | `dict` | No |  |
| `origin` | `dict` | No |  |
| `stopovers` | `list` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Trip().load({"id": "trip_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TripEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = TransportrestTransitApisSDK({
    "feature": {
        "test": {"active": True},
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

