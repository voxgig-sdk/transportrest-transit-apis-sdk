# transport.rest transit APIs

Provides transit APIs for different regions such as Germany, Poland, Berlin-Brandenburg, Schleswig-Holstein, Europe, and England. Publicly available, developer-friendly transit data APIs run by friendly people on the internet.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 7 entities and 7 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Arrival

Results: Successful response with arrivals.

SDK operations: `list`.

Key fields to recognise:

- `delay`: Delay in seconds
- `direction`: Direction of the trip
- `plannedPlatform`: Originally planned platform
- `plannedWhen`: Originally planned arrival time
- `platform`: Arrival platform

### Departure

Results: Successful response with departures.

SDK operations: `list`.

Key fields to recognise:

- `delay`: Delay in seconds
- `direction`: Direction of the trip
- `plannedPlatform`: Originally planned platform
- `plannedWhen`: Originally planned departure time
- `platform`: Departure platform

### Journey

Results: Successful response with journeys.

SDK operations: `list`.

Key fields to recognise:

- `legs`: Journey legs
- `refreshToken`: Token to refresh this journey

### Location

Results: Successful response with locations.

SDK operations: `list`.

Key fields to recognise:

- `id`: Unique identifier for the location
- `name`: Name of the location
- `products`: Available products at this location
- `type`: Type of location

### Radar

Results: Successful response with vehicles.

SDK operations: `list`.

Key fields to recognise:

- `direction`: Direction of the movement
- `tripId`: Trip identifier

### Stop

Results: Successful response with stop details.

SDK operations: `load`.

Key fields to recognise:

- `id`: Unique identifier for the stop
- `name`: Name of the stop
- `products`: Available products at this stop
- `station`: Parent station if applicable

### Trip

Results: Successful response with trip details.

SDK operations: `load`.

Key fields to recognise:

- `direction`: Direction of the trip
- `id`: Trip identifier

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Arrival | `list` | `GET /stops/{id}/arrivals` | See reference |
| Departure | `list` | `GET /stops/{id}/departures` | See reference |
| Journey | `list` | `GET /journeys` | See reference |
| Location | `list` | `GET /locations` | See reference |
| Radar | `list` | `GET /radar` | See reference |
| Stop | `load` | `GET /stops/{id}` | See reference |
| Trip | `load` | `GET /trips/{id}` | See reference |

## Connect to the API

- Deutsche Bahn (Germany) API: `https://v6.db.transport.rest`
- Poland transit API: `https://poland.transport.rest`
- VBB (Berlin &amp; Brandenburg) API: `https://v6.vbb.transport.rest`
- BVG (Berlin &amp; Brandenburg) API: `https://v6.bvg.transport.rest`
- Flixbus (Germany/Europe) API: `https://1.flixbus.transport.rest`
- Nottingham City Transport (England) API: `https://v1.nottingham-city.transport.rest`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `transportrest-transit-apis_list`: List records for an entity. Supported entities: `arrival`, `departure`, `journey`, `location`, `radar`.
- `transportrest-transit-apis_load`: Load one record for an entity. Supported entities: `stop`, `trip`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

