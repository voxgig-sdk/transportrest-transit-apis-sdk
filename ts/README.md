# TransportrestTransitApis TypeScript SDK



The TypeScript SDK for the TransportrestTransitApis API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/transportrest-transit-apis-sdk/releases](https://github.com/voxgig-sdk/transportrest-transit-apis-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { TransportrestTransitApisSDK } from '@voxgig-sdk/transportrest-transit-apis'

const client = new TransportrestTransitApisSDK()
```

### 2. List arrivals

```ts
const result = await client.arrival.list()

if (result.ok) {
  for (const item of result.data) {
    console.log(item.id, item.name)
  }
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = TransportrestTransitApisSDK.test()

const result = await client.arrival.load({ id: 'test01' })
// result.ok === true
// result.data contains mock response data
```

You can also use the instance method:

```ts
const client = new TransportrestTransitApisSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.arrival

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new TransportrestTransitApisSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### TransportrestTransitApisSDK

#### Constructor

```ts
new TransportrestTransitApisSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Arrival(data?)` | `ArrivalEntity` | Create a Arrival entity instance. |
| `Departure(data?)` | `DepartureEntity` | Create a Departure entity instance. |
| `Journey(data?)` | `JourneyEntity` | Create a Journey entity instance. |
| `Location(data?)` | `LocationEntity` | Create a Location entity instance. |
| `Radar(data?)` | `RadarEntity` | Create a Radar entity instance. |
| `Stop(data?)` | `StopEntity` | Create a Stop entity instance. |
| `Trip(data?)` | `TripEntity` | Create a Trip entity instance. |
| `tester(testopts?, sdkopts?)` | `TransportrestTransitApisSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `TransportrestTransitApisSDK.test(testopts?, sdkopts?)` | `TransportrestTransitApisSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Result>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Result>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Result>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Result>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Result>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): TransportrestTransitApisSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Result shape

All entity operations return a Result object:

```ts
{
  ok: boolean      // true if the HTTP status is 2xx
  status: number   // HTTP status code
  headers: object  // response headers
  data: any        // parsed JSON response body
}
```

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: list.

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

Operations: list.

API path: `/stops/{id}/departures`

#### Journey

| Field | Description |
| --- | --- |
| `leg` |  |
| `refresh_token` |  |
| `type` |  |

Operations: list.

API path: `/journeys`

#### Location

| Field | Description |
| --- | --- |
| `id` |  |
| `location` |  |
| `name` |  |
| `product` |  |
| `type` |  |

Operations: list.

API path: `/locations`

#### Radar

| Field | Description |
| --- | --- |
| `direction` |  |
| `line` |  |
| `location` |  |
| `next_stopover` |  |
| `trip_id` |  |

Operations: list.

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

Operations: load.

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

Operations: load.

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
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
transportrest-transit-apis/
├── src/
│   ├── TransportrestTransitApisSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { TransportrestTransitApisSDK } from '@voxgig-sdk/transportrest-transit-apis'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const arrival = client.arrival
await arrival.load({ id: "example_id" })

// arrival.data() now returns the loaded arrival data
// arrival.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
