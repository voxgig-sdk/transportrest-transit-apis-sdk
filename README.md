# TransportrestTransitApis SDK

Query German and European public-transport timetables, journeys, and realtime departures via a community REST wrapper around Deutsche Bahn

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About transport.rest transit APIs

`transport.rest` is a family of community-run REST APIs that wrap public-transport backends across Germany and Europe. The DB v6 endpoint at `https://v6.db.transport.rest` is built on top of [`db-vendo-client`](https://github.com/public-transport/db-vendo-client) and exposes the same long-distance, regional, and selected international and local services you see in the DB Navigator app.

What you typically get from the API:

- **Locations** — search stations, stops, addresses, and points of interest by name or coordinates.
- **Departures / Arrivals** — board listings for a given stop, including realtime delays, platforms, and direction filters.
- **Journeys** — A-to-B routing with transfers, prices (where available), and polyline geometry.
- **Trips / Stops** — detailed timetable and stop-sequence data for a specific train or bus run.

No API key is required and CORS is enabled, which makes the service convenient for prototyping. The maintainers document a soft limit of around **100 requests/minute** and warn that the underlying VENDO backend is markedly more rate-limited than the deprecated HAFAS API; the `/radar` endpoint in particular is not currently usable. Responses support ETag-based caching, and a Docker image plus Redis cache are recommended for production use.

## Try it

**TypeScript**
```bash
npm install transportrest-transit-apis
```

**Python**
```bash
pip install transportrest-transit-apis-sdk
```

**PHP**
```bash
composer require voxgig/transportrest-transit-apis-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/transportrest-transit-apis-sdk/go
```

**Ruby**
```bash
gem install transportrest-transit-apis-sdk
```

**Lua**
```bash
luarocks install transportrest-transit-apis-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { TransportrestTransitApisSDK } from 'transportrest-transit-apis'

const client = new TransportrestTransitApisSDK({})

// List all arrivals
const arrivals = await client.Arrival().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o transportrest-transit-apis-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "transportrest-transit-apis": {
      "command": "/abs/path/to/transportrest-transit-apis-mcp"
    }
  }
}
```

## Entities

The API exposes 7 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Arrival** | Realtime arrival board for a stop, typically served from `/stops/{id}/arrivals`, including platform, delay, and origin information. | `/stops/{id}/arrivals` |
| **Departure** | Realtime departure board for a stop, typically served from `/stops/{id}/departures`, with direction, platform, and delay data. | `/stops/{id}/departures` |
| **Journey** | A-to-B trip planning from `/journeys`, returning one or more itineraries with legs, transfers, and timing. | `/journeys` |
| **Location** | Free-text and geo lookup for stations, addresses, and POIs via `/locations` (and station autocomplete). | `/locations` |
| **Radar** | Geographic radar of vehicles currently in a bounding box via `/radar` — noted as unavailable on the current VENDO backend. | `/radar` |
| **Stop** | Station and stop metadata served from `/stops/{id}`, including name, location, and product categories. | `/stops/{id}` |
| **Trip** | Detailed run of a single train or bus via `/trips/{id}`, with the full stop sequence and realtime status. | `/trips/{id}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from transportresttransitapis_sdk import TransportrestTransitApisSDK

client = TransportrestTransitApisSDK({})

# List all arrivals
arrivals, err = client.Arrival(None).list(None, None)
```

### PHP

```php
<?php
require_once 'transportresttransitapis_sdk.php';

$client = new TransportrestTransitApisSDK([]);

// List all arrivals
[$arrivals, $err] = $client->Arrival(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/transportrest-transit-apis-sdk/go"

client := sdk.NewTransportrestTransitApisSDK(map[string]any{})

// List all arrivals
arrivals, err := client.Arrival(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "TransportrestTransitApis_sdk"

client = TransportrestTransitApisSDK.new({})

# List all arrivals
arrivals, err = client.Arrival(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("transportrest-transit-apis_sdk")

local client = sdk.new({})

-- List all arrivals
local arrivals, err = client:Arrival(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = TransportrestTransitApisSDK.test()
const result = await client.Arrival().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = TransportrestTransitApisSDK.test(None, None)
result, err = client.Arrival(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = TransportrestTransitApisSDK::test(null, null);
[$result, $err] = $client->Arrival(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Arrival(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = TransportrestTransitApisSDK.test(nil, nil)
result, err = client.Arrival(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Arrival(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the transport.rest transit APIs

- Upstream: [https://v6.db.transport.rest](https://v6.db.transport.rest)

- The `db-rest` server code is published under the **ISC License**.
- The data returned is sourced from Deutsche Bahn's VENDO backend; usage is subject to DB's own terms.
- This is an unofficial, community-maintained mirror — it is not operated by Deutsche Bahn.
- Heavy users are encouraged to self-host or rely on GTFS feeds, since the upstream APIs have stricter rate limits than the older HAFAS endpoints.

---

Generated from the transport.rest transit APIs OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
