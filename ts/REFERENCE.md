# TransportrestTransitApis TypeScript SDK Reference

Complete API reference for the TransportrestTransitApis TypeScript SDK.


## TransportrestTransitApisSDK

### Constructor

```ts
new TransportrestTransitApisSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TransportrestTransitApisSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = TransportrestTransitApisSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `TransportrestTransitApisSDK` instance in test mode.


### Instance Methods

#### `Arrival(data?: object)`

Create a new `Arrival` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArrivalEntity` instance.

#### `Departure(data?: object)`

Create a new `Departure` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DepartureEntity` instance.

#### `Journey(data?: object)`

Create a new `Journey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JourneyEntity` instance.

#### `Location(data?: object)`

Create a new `Location` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LocationEntity` instance.

#### `Radar(data?: object)`

Create a new `Radar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RadarEntity` instance.

#### `Stop(data?: object)`

Create a new `Stop` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StopEntity` instance.

#### `Trip(data?: object)`

Create a new `Trip` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TripEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `TransportrestTransitApisSDK.test()`.

**Returns:** `TransportrestTransitApisSDK` instance in test mode.


---

## ArrivalEntity

```ts
const arrival = client.Arrival()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `number` | No | Delay in seconds |
| `direction` | `string` | No | Direction of the trip |
| `line` | `Record<string, any>` | No |  |
| `plannedPlatform` | `string` | No | Originally planned platform |
| `plannedWhen` | `string` | No | Originally planned arrival time |
| `platform` | `string` | No | Arrival platform |
| `stop` | `Record<string, any>` | No |  |
| `tripId` | `string` | No | Trip identifier |
| `when` | `string` | No | Scheduled arrival time |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Arrival().list({ stop_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArrivalEntity` instance with the same client and
options.

#### `client()`

Return the parent `TransportrestTransitApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DepartureEntity

```ts
const departure = client.Departure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delay` | `number` | No | Delay in seconds |
| `direction` | `string` | No | Direction of the trip |
| `line` | `Record<string, any>` | No |  |
| `plannedPlatform` | `string` | No | Originally planned platform |
| `plannedWhen` | `string` | No | Originally planned departure time |
| `platform` | `string` | No | Departure platform |
| `stop` | `Record<string, any>` | No |  |
| `tripId` | `string` | No | Trip identifier |
| `when` | `string` | No | Scheduled departure time |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Departure().list({ stop_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DepartureEntity` instance with the same client and
options.

#### `client()`

Return the parent `TransportrestTransitApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JourneyEntity

```ts
const journey = client.Journey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `legs` | `any[]` | No | Journey legs |
| `refreshToken` | `string` | No | Token to refresh this journey |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Journey().list({ from: "example", to: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JourneyEntity` instance with the same client and
options.

#### `client()`

Return the parent `TransportrestTransitApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LocationEntity

```ts
const location = client.Location()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier for the location |
| `location` | `Record<string, any>` | No |  |
| `name` | `string` | No | Name of the location |
| `products` | `Record<string, any>` | No | Available products at this location |
| `type` | `string` | No | Type of location |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Location().list({ query: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LocationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TransportrestTransitApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RadarEntity

```ts
const radar = client.Radar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direction` | `string` | No | Direction of the movement |
| `line` | `Record<string, any>` | No |  |
| `location` | `Record<string, any>` | No |  |
| `nextStopovers` | `any[]` | No |  |
| `tripId` | `string` | No | Trip identifier |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Radar().list({ east: 1, north: 1, south: 1, west: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RadarEntity` instance with the same client and
options.

#### `client()`

Return the parent `TransportrestTransitApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StopEntity

```ts
const stop = client.Stop()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier for the stop |
| `location` | `Record<string, any>` | No |  |
| `name` | `string` | No | Name of the stop |
| `products` | `Record<string, any>` | No | Available products at this stop |
| `station` | `Record<string, any>` | No | Parent station if applicable |
| `type` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Stop().load({ id: 'stop_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StopEntity` instance with the same client and
options.

#### `client()`

Return the parent `TransportrestTransitApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TripEntity

```ts
const trip = client.Trip()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | `Record<string, any>` | No |  |
| `direction` | `string` | No | Direction of the trip |
| `id` | `string` | No | Trip identifier |
| `line` | `Record<string, any>` | No |  |
| `origin` | `Record<string, any>` | No |  |
| `stopovers` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Trip().load({ id: 'trip_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TripEntity` instance with the same client and
options.

#### `client()`

Return the parent `TransportrestTransitApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new TransportrestTransitApisSDK({
  feature: {
    test: { active: true },
  }
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

