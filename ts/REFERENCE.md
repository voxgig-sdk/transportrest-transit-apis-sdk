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
const arrival = client.arrival
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.arrival.list()
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
const departure = client.departure
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.departure.list()
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
const journey = client.journey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `leg` | ``$ARRAY`` | No |  |
| `refresh_token` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.journey.list()
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
const location = client.location
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.location.list()
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
const radar = client.radar
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.radar.list()
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
const stop = client.stop
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.stop.load({ id: 'stop_id' })
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
const trip = client.trip
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.trip.load({ id: 'trip_id' })
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

