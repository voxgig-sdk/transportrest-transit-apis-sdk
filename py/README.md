# TransportrestTransitApis Python SDK



The Python SDK for the TransportrestTransitApis API — an entity-oriented client following Pythonic conventions.

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

### 2. List arrivals

```python
try:
    result = client.arrival.list()
    for item in result:
        d = item.data_get()
        print(d["id"], d["name"])
except Exception as err:
    print(f"list failed: {err}")
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
    print(result["err"])     # error value
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

result = client.arrival.load({"id": "test01"})
# result contains mock response data
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
| `Arrival` | `(data) -> ArrivalEntity` | Create a Arrival entity instance. |
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
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
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
| `delay` |  |
| `direction` |  |
| `line` |  |
| `planned_platform` |  |
| `planned_when` |  |
| `platform` |  |
| `stop` |  |
| `trip_id` |  |
| `when` |  |

Operations: List.

API path: `/stops/{id}/arrivals`

#### Departure

| Field | Description |
| --- | --- |
| `delay` |  |
| `direction` |  |
| `line` |  |
| `planned_platform` |  |
| `planned_when` |  |
| `platform` |  |
| `stop` |  |
| `trip_id` |  |
| `when` |  |

Operations: List.

API path: `/stops/{id}/departures`

#### Journey

| Field | Description |
| --- | --- |
| `leg` |  |
| `refresh_token` |  |
| `type` |  |

Operations: List.

API path: `/journeys`

#### Location

| Field | Description |
| --- | --- |
| `id` |  |
| `location` |  |
| `name` |  |
| `product` |  |
| `type` |  |

Operations: List.

API path: `/locations`

#### Radar

| Field | Description |
| --- | --- |
| `direction` |  |
| `line` |  |
| `location` |  |
| `next_stopover` |  |
| `trip_id` |  |

Operations: List.

API path: `/radar`

#### Stop

| Field | Description |
| --- | --- |
| `id` |  |
| `location` |  |
| `name` |  |
| `product` |  |
| `station` |  |
| `type` |  |

Operations: Load.

API path: `/stops/{id}`

#### Trip

| Field | Description |
| --- | --- |
| `destination` |  |
| `direction` |  |
| `id` |  |
| `line` |  |
| `origin` |  |
| `stopover` |  |

Operations: Load.

API path: `/trips/{id}`



## Entities


### Arrival

Create an instance: `const arrival = client.arrival`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `delay` | ``$INTEGER`` |  |
| `direction` | ``$STRING`` |  |
| `line` | ``$OBJECT`` |  |
| `planned_platform` | ``$STRING`` |  |
| `planned_when` | ``$STRING`` |  |
| `platform` | ``$STRING`` |  |
| `stop` | ``$OBJECT`` |  |
| `trip_id` | ``$STRING`` |  |
| `when` | ``$STRING`` |  |

#### Example: List

```ts
const arrivals = await client.arrival.list()
```


### Departure

Create an instance: `const departure = client.departure`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `delay` | ``$INTEGER`` |  |
| `direction` | ``$STRING`` |  |
| `line` | ``$OBJECT`` |  |
| `planned_platform` | ``$STRING`` |  |
| `planned_when` | ``$STRING`` |  |
| `platform` | ``$STRING`` |  |
| `stop` | ``$OBJECT`` |  |
| `trip_id` | ``$STRING`` |  |
| `when` | ``$STRING`` |  |

#### Example: List

```ts
const departures = await client.departure.list()
```


### Journey

Create an instance: `const journey = client.journey`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `leg` | ``$ARRAY`` |  |
| `refresh_token` | ``$STRING`` |  |
| `type` | ``$STRING`` |  |

#### Example: List

```ts
const journeys = await client.journey.list()
```


### Location

Create an instance: `const location = client.location`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | ``$STRING`` |  |
| `location` | ``$OBJECT`` |  |
| `name` | ``$STRING`` |  |
| `product` | ``$OBJECT`` |  |
| `type` | ``$STRING`` |  |

#### Example: List

```ts
const locations = await client.location.list()
```


### Radar

Create an instance: `const radar = client.radar`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direction` | ``$STRING`` |  |
| `line` | ``$OBJECT`` |  |
| `location` | ``$OBJECT`` |  |
| `next_stopover` | ``$ARRAY`` |  |
| `trip_id` | ``$STRING`` |  |

#### Example: List

```ts
const radars = await client.radar.list()
```


### Stop

Create an instance: `const stop = client.stop`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | ``$STRING`` |  |
| `location` | ``$OBJECT`` |  |
| `name` | ``$STRING`` |  |
| `product` | ``$OBJECT`` |  |
| `station` | ``$OBJECT`` |  |
| `type` | ``$STRING`` |  |

#### Example: Load

```ts
const stop = await client.stop.load({ id: 'stop_id' })
```


### Trip

Create an instance: `const trip = client.trip`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination` | ``$OBJECT`` |  |
| `direction` | ``$STRING`` |  |
| `id` | ``$STRING`` |  |
| `line` | ``$OBJECT`` |  |
| `origin` | ``$OBJECT`` |  |
| `stopover` | ``$ARRAY`` |  |

#### Example: Load

```ts
const trip = await client.trip.load({ id: 'trip_id' })
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as the second element in the return tuple.

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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
arrival = client.arrival
arrival.load({"id": "example_id"})

# arrival.data_get() now returns the loaded arrival data
# arrival.match_get() returns the last match criteria
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
