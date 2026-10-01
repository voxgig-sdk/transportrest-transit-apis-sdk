import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "arrival",
    "accessor": "Arrival",
    "op": "list",
    "method": "GET",
    "path": "/stops/{id}/arrivals",
    "args": [
      {
        "name": "stop_id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {
      "duration": "v1",
      "result": "v1",
      "when": "v1"
    },
    "headers": [],
    "query": [
      "when",
      "duration",
      "results"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "arrivals": [
        {
          "delay": 1,
          "direction": "x",
          "line": {
            "id": "x",
            "mode": "x",
            "name": "x",
            "operator": {},
            "product": "x",
            "type": "line"
          },
          "plannedPlatform": "x",
          "plannedWhen": "2026-01-01T00:00:00Z",
          "platform": "x",
          "stop": {
            "id": "x",
            "location": {
              "latitude": 1,
              "longitude": 1,
              "type": "location"
            },
            "name": "x",
            "products": {},
            "station": {},
            "type": "stop"
          },
          "tripId": "x",
          "when": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "departure",
    "accessor": "Departure",
    "op": "list",
    "method": "GET",
    "path": "/stops/{id}/departures",
    "args": [
      {
        "name": "stop_id",
        "wire": "id",
        "value": "900000003201"
      }
    ],
    "select": {
      "direction": "v1",
      "duration": "v1",
      "result": "v1",
      "when": "v1"
    },
    "headers": [],
    "query": [
      "when",
      "duration",
      "results",
      "direction"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "departures": [
        {
          "delay": 1,
          "direction": "x",
          "line": {
            "id": "x",
            "mode": "x",
            "name": "x",
            "operator": {},
            "product": "x",
            "type": "line"
          },
          "plannedPlatform": "x",
          "plannedWhen": "2026-01-01T00:00:00Z",
          "platform": "x",
          "stop": {
            "id": "x",
            "location": {
              "latitude": 1,
              "longitude": 1,
              "type": "location"
            },
            "name": "x",
            "products": {},
            "station": {},
            "type": "stop"
          },
          "tripId": "x",
          "when": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "journey",
    "accessor": "Journey",
    "op": "list",
    "method": "GET",
    "path": "/journeys",
    "args": [],
    "select": {
      "arrival": "v1",
      "departure": "v1",
      "from": "900000003201",
      "result": "v1",
      "stopover": "v1",
      "to": "900000100003"
    },
    "headers": [],
    "query": [
      "from",
      "to",
      "departure",
      "arrival",
      "results",
      "stopovers"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "journeys": [
        {
          "legs": [
            {
              "arrival": "2026-01-01T00:00:00Z",
              "departure": "2026-01-01T00:00:00Z",
              "destination": {
                "id": "x",
                "location": {},
                "name": "x",
                "products": {},
                "station": {},
                "type": "stop"
              },
              "direction": "x",
              "line": {
                "id": "x",
                "mode": "x",
                "name": "x",
                "operator": {},
                "product": "x",
                "type": "line"
              },
              "origin": {
                "id": "x",
                "location": {},
                "name": "x",
                "products": {},
                "station": {},
                "type": "stop"
              },
              "plannedArrival": "2026-01-01T00:00:00Z",
              "plannedDeparture": "2026-01-01T00:00:00Z",
              "stopovers": [
                {}
              ]
            }
          ],
          "refreshToken": "x",
          "type": "journey"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "location",
    "accessor": "Location",
    "op": "list",
    "method": "GET",
    "path": "/locations",
    "args": [],
    "select": {
      "address": "v1",
      "poi": "v1",
      "query": "Berlin",
      "result": "v1",
      "stop": "v1"
    },
    "headers": [],
    "query": [
      "query",
      "results",
      "stops",
      "addresses",
      "poi"
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "type": "stop",
        "id": "x",
        "name": "x",
        "location": {
          "type": "location",
          "latitude": 1,
          "longitude": 1
        },
        "products": {}
      }
    ],
    "idField": "id"
  },
  {
    "entity": "radar",
    "accessor": "Radar",
    "op": "list",
    "method": "GET",
    "path": "/radar",
    "args": [],
    "select": {
      "east": "v1",
      "north": "v1",
      "result": "v1",
      "south": "v1",
      "west": "v1"
    },
    "headers": [],
    "query": [
      "north",
      "west",
      "south",
      "east",
      "results"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "movements": [
        {
          "direction": "x",
          "line": {
            "id": "x",
            "mode": "x",
            "name": "x",
            "operator": {},
            "product": "x",
            "type": "line"
          },
          "location": {
            "latitude": 1,
            "longitude": 1,
            "type": "location"
          },
          "nextStopovers": [
            {
              "arrival": "2026-01-01T00:00:00Z",
              "departure": "2026-01-01T00:00:00Z",
              "plannedArrival": "2026-01-01T00:00:00Z",
              "plannedDeparture": "2026-01-01T00:00:00Z",
              "stop": {
                "id": "x",
                "location": {},
                "name": "x",
                "products": {},
                "station": {},
                "type": "stop"
              }
            }
          ],
          "tripId": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "stop",
    "accessor": "Stop",
    "op": "load",
    "method": "GET",
    "path": "/stops/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "900000003201"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "type": "stop",
      "id": "x",
      "name": "x",
      "location": {
        "latitude": 1,
        "longitude": 1,
        "type": "location"
      },
      "products": {},
      "station": {}
    },
    "idField": "id"
  },
  {
    "entity": "trip",
    "accessor": "Trip",
    "op": "load",
    "method": "GET",
    "path": "/trips/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {
      "line_name": "v1",
      "stopover": "v1"
    },
    "headers": [],
    "query": [
      "lineName",
      "stopovers"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "x",
      "line": {
        "type": "line",
        "id": "x",
        "name": "x",
        "mode": "x",
        "product": "x",
        "operator": {}
      },
      "direction": "x",
      "origin": {
        "type": "stop",
        "id": "x",
        "name": "x",
        "location": {
          "latitude": 1,
          "longitude": 1,
          "type": "location"
        },
        "products": {},
        "station": {}
      },
      "destination": {
        "type": "stop",
        "id": "x",
        "name": "x",
        "location": {
          "latitude": 1,
          "longitude": 1,
          "type": "location"
        },
        "products": {},
        "station": {}
      },
      "stopovers": [
        {
          "stop": {
            "id": "x",
            "location": {
              "latitude": 1,
              "longitude": 1,
              "type": "location"
            },
            "name": "x",
            "products": {},
            "station": {},
            "type": "stop"
          },
          "arrival": "2026-01-01T00:00:00Z",
          "plannedArrival": "2026-01-01T00:00:00Z",
          "departure": "2026-01-01T00:00:00Z",
          "plannedDeparture": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
