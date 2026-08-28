# TransportrestTransitApis TypeScript SDK



The TypeScript SDK for the TransportrestTransitApis API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Arrival()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
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

### 2. List arrival records

`list()` resolves to an array of Arrival ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const arrivals = await client.Arrival().list({ stop_id: "example" })

for (const arrival of arrivals) {
  console.log(arrival)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const locations = await client.Location().list()
  console.log(locations)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
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

if (result instanceof Error) {
  throw result
}
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

const location = await client.Location().list()
// location is the entity, populated with mock response data
// — call location.data() for the record itself
console.log(location)
```

You can also use the instance method:

```ts
const client = new TransportrestTransitApisSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Location()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
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
| `Arrival(data?)` | `ArrivalEntity` | Create an Arrival entity instance. |
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
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): TransportrestTransitApisSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

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
| `delay` | Delay in seconds |
| `direction` | Direction of the trip |
| `line` |  |
| `plannedPlatform` | Originally planned platform |
| `plannedWhen` | Originally planned arrival time |
| `platform` | Arrival platform |
| `stop` |  |
| `tripId` | Trip identifier |
| `when` | Scheduled arrival time |

Operations: list.

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

Operations: list.

API path: `/stops/{id}/departures`

#### Journey

| Field | Description |
| --- | --- |
| `legs` | Journey legs |
| `refreshToken` | Token to refresh this journey |
| `type` |  |

Operations: list.

API path: `/journeys`

#### Location

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the location |
| `location` |  |
| `name` | Name of the location |
| `products` | Available products at this location |
| `type` | Type of location |

Operations: list.

API path: `/locations`

#### Radar

| Field | Description |
| --- | --- |
| `direction` | Direction of the movement |
| `line` |  |
| `location` |  |
| `nextStopovers` |  |
| `tripId` | Trip identifier |

Operations: list.

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

Operations: load.

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

Operations: load.

API path: `/trips/{id}`



## Entities


### Arrival

Create an instance: `const arrival = client.Arrival()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `delay` | `number` | Delay in seconds |
| `direction` | `string` | Direction of the trip |
| `line` | `Record<string, any>` |  |
| `plannedPlatform` | `string` | Originally planned platform |
| `plannedWhen` | `string` | Originally planned arrival time |
| `platform` | `string` | Arrival platform |
| `stop` | `Record<string, any>` |  |
| `tripId` | `string` | Trip identifier |
| `when` | `string` | Scheduled arrival time |

#### Example: List

```ts
const arrivals = await client.Arrival().list({ stop_id: "example" })
```


### Departure

Create an instance: `const departure = client.Departure()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `delay` | `number` | Delay in seconds |
| `direction` | `string` | Direction of the trip |
| `line` | `Record<string, any>` |  |
| `plannedPlatform` | `string` | Originally planned platform |
| `plannedWhen` | `string` | Originally planned departure time |
| `platform` | `string` | Departure platform |
| `stop` | `Record<string, any>` |  |
| `tripId` | `string` | Trip identifier |
| `when` | `string` | Scheduled departure time |

#### Example: List

```ts
const departures = await client.Departure().list({ stop_id: "example" })
```


### Journey

Create an instance: `const journey = client.Journey()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `legs` | `any[]` | Journey legs |
| `refreshToken` | `string` | Token to refresh this journey |
| `type` | `string` |  |

#### Example: List

```ts
const journeys = await client.Journey().list({ from: "example", to: "example" })
```


### Location

Create an instance: `const location = client.Location()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the location |
| `location` | `Record<string, any>` |  |
| `name` | `string` | Name of the location |
| `products` | `Record<string, any>` | Available products at this location |
| `type` | `string` | Type of location |

#### Example: List

```ts
const locations = await client.Location().list({ query: "example" })
```


### Radar

Create an instance: `const radar = client.Radar()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direction` | `string` | Direction of the movement |
| `line` | `Record<string, any>` |  |
| `location` | `Record<string, any>` |  |
| `nextStopovers` | `any[]` |  |
| `tripId` | `string` | Trip identifier |

#### Example: List

```ts
const radars = await client.Radar().list({ east: 1, north: 1, south: 1, west: 1 })
```


### Stop

Create an instance: `const stop = client.Stop()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the stop |
| `location` | `Record<string, any>` |  |
| `name` | `string` | Name of the stop |
| `products` | `Record<string, any>` | Available products at this stop |
| `station` | `Record<string, any>` | Parent station if applicable |
| `type` | `string` |  |

#### Example: Load

```ts
const stop = await client.Stop().load({ id: 'stop_id' })
```


### Trip

Create an instance: `const trip = client.Trip()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination` | `Record<string, any>` |  |
| `direction` | `string` | Direction of the trip |
| `id` | `string` | Trip identifier |
| `line` | `Record<string, any>` |  |
| `origin` | `Record<string, any>` |  |
| `stopovers` | `any[]` |  |

#### Example: Load

```ts
const trip = await client.Trip().load({ id: 'trip_id' })
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

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const location = client.Location()
await location.list()

// location.data() now returns the location data from the last `list`
// location.match() returns the last match criteria
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
