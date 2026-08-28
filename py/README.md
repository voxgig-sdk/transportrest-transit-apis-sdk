# TransportrestTransitApis Python SDK



The Python SDK for the TransportrestTransitApis API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Arrival()` — each
carrying a small, uniform set of operations (`list`, `load`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/transportrest-transit-apis-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from transportresttransitapis_sdk import TransportrestTransitApisSDK

client = TransportrestTransitApisSDK()
```

### 2. List arrival records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    arrivals = client.Arrival().list({"stop_id": "example"})
    for arrival in arrivals:
        print(arrival)
except Exception as err:
    print(f"list failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    locations = client.Location().list()
    print(locations)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = TransportrestTransitApisSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
location = client.Location().list()
# location contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = TransportrestTransitApisSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### TransportrestTransitApisSDK

```python
from transportresttransitapis_sdk import TransportrestTransitApisSDK

client = TransportrestTransitApisSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = TransportrestTransitApisSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### TransportrestTransitApisSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Arrival` | `(data) -> ArrivalEntity` | Create an Arrival entity instance. |
| `Departure` | `(data) -> DepartureEntity` | Create a Departure entity instance. |
| `Journey` | `(data) -> JourneyEntity` | Create a Journey entity instance. |
| `Location` | `(data) -> LocationEntity` | Create a Location entity instance. |
| `Radar` | `(data) -> RadarEntity` | Create a Radar entity instance. |
| `Stop` | `(data) -> StopEntity` | Create a Stop entity instance. |
| `Trip` | `(data) -> TripEntity` | Create a Trip entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `arrival = client.Arrival()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `delay` | `int` | Delay in seconds |
| `direction` | `str` | Direction of the trip |
| `line` | `dict` |  |
| `plannedPlatform` | `str` | Originally planned platform |
| `plannedWhen` | `str` | Originally planned arrival time |
| `platform` | `str` | Arrival platform |
| `stop` | `dict` |  |
| `tripId` | `str` | Trip identifier |
| `when` | `str` | Scheduled arrival time |

#### Example: List

```python
arrivals = client.Arrival().list({"stop_id": "example"})
```


### Departure

Create an instance: `departure = client.Departure()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `delay` | `int` | Delay in seconds |
| `direction` | `str` | Direction of the trip |
| `line` | `dict` |  |
| `plannedPlatform` | `str` | Originally planned platform |
| `plannedWhen` | `str` | Originally planned departure time |
| `platform` | `str` | Departure platform |
| `stop` | `dict` |  |
| `tripId` | `str` | Trip identifier |
| `when` | `str` | Scheduled departure time |

#### Example: List

```python
departures = client.Departure().list({"stop_id": "example"})
```


### Journey

Create an instance: `journey = client.Journey()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `legs` | `list` | Journey legs |
| `refreshToken` | `str` | Token to refresh this journey |
| `type` | `str` |  |

#### Example: List

```python
journeys = client.Journey().list({"from": "example", "to": "example"})
```


### Location

Create an instance: `location = client.Location()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | Unique identifier for the location |
| `location` | `dict` |  |
| `name` | `str` | Name of the location |
| `products` | `dict` | Available products at this location |
| `type` | `str` | Type of location |

#### Example: List

```python
locations = client.Location().list({"query": "example"})
```


### Radar

Create an instance: `radar = client.Radar()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direction` | `str` | Direction of the movement |
| `line` | `dict` |  |
| `location` | `dict` |  |
| `nextStopovers` | `list` |  |
| `tripId` | `str` | Trip identifier |

#### Example: List

```python
radars = client.Radar().list({"east": 1, "north": 1, "south": 1, "west": 1})
```


### Stop

Create an instance: `stop = client.Stop()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | Unique identifier for the stop |
| `location` | `dict` |  |
| `name` | `str` | Name of the stop |
| `products` | `dict` | Available products at this stop |
| `station` | `dict` | Parent station if applicable |
| `type` | `str` |  |

#### Example: Load

```python
stop = client.Stop().load({"id": "stop_id"})
```


### Trip

Create an instance: `trip = client.Trip()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination` | `dict` |  |
| `direction` | `str` | Direction of the trip |
| `id` | `str` | Trip identifier |
| `line` | `dict` |  |
| `origin` | `dict` |  |
| `stopovers` | `list` |  |

#### Example: Load

```python
trip = client.Trip().load({"id": "trip_id"})
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── transportresttransitapis_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`transportresttransitapis_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
location = client.Location()
location.list()

# location.data_get() now returns the location data from the last list
# location.match_get() returns the last match criteria
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
