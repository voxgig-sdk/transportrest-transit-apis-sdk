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
      "duration": 120,
      "result": 10,
      "when": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "when",
      "duration",
      "results"
    ],
    "queryArgs": [
      {
        "name": "duration",
        "wire": "duration"
      },
      {
        "name": "result",
        "wire": "results"
      },
      {
        "name": "when",
        "wire": "when"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "arrivals": [
        {
          "tripId": "x",
          "stop": {
            "type": "stop",
            "id": "x",
            "name": "x",
            "location": {
              "type": "location",
              "latitude": 1,
              "longitude": 1
            },
            "products": {},
            "station": {}
          },
          "when": "2026-01-01T00:00:00Z",
          "plannedWhen": "2026-01-01T00:00:00Z",
          "delay": 1,
          "platform": "x",
          "plannedPlatform": "x",
          "direction": "x",
          "line": {
            "type": "line",
            "id": "x",
            "name": "x",
            "mode": "x",
            "product": "x",
            "operator": {}
          }
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
      "duration": 120,
      "result": 10,
      "when": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "when",
      "duration",
      "results",
      "direction"
    ],
    "queryArgs": [
      {
        "name": "direction",
        "wire": "direction"
      },
      {
        "name": "duration",
        "wire": "duration"
      },
      {
        "name": "result",
        "wire": "results"
      },
      {
        "name": "when",
        "wire": "when"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "departures": [
        {
          "tripId": "x",
          "stop": {
            "type": "stop",
            "id": "x",
            "name": "x",
            "location": {
              "type": "location",
              "latitude": 1,
              "longitude": 1
            },
            "products": {},
            "station": {}
          },
          "when": "2026-01-01T00:00:00Z",
          "plannedWhen": "2026-01-01T00:00:00Z",
          "delay": 1,
          "platform": "x",
          "plannedPlatform": "x",
          "direction": "x",
          "line": {
            "type": "line",
            "id": "x",
            "name": "x",
            "mode": "x",
            "product": "x",
            "operator": {}
          }
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
      "from": "900000003201",
      "to": "900000100003",
      "arrival": "v1",
      "departure": "v1",
      "result": 3,
      "stopover": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "from",
      "to",
      "departure",
      "arrival",
      "results",
      "stopovers"
    ],
    "queryArgs": [
      {
        "name": "arrival",
        "wire": "arrival"
      },
      {
        "name": "departure",
        "wire": "departure"
      },
      {
        "name": "from",
        "wire": "from"
      },
      {
        "name": "result",
        "wire": "results"
      },
      {
        "name": "stopover",
        "wire": "stopovers"
      },
      {
        "name": "to",
        "wire": "to"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "journeys": [
        {
          "type": "journey",
          "legs": [
            {
              "origin": {
                "type": "stop",
                "id": "x",
                "name": "x",
                "location": {},
                "products": {},
                "station": {}
              },
              "destination": {
                "type": "stop",
                "id": "x",
                "name": "x",
                "location": {},
                "products": {},
                "station": {}
              },
              "departure": "2026-01-01T00:00:00Z",
              "plannedDeparture": "2026-01-01T00:00:00Z",
              "arrival": "2026-01-01T00:00:00Z",
              "plannedArrival": "2026-01-01T00:00:00Z",
              "line": {
                "type": "line",
                "id": "x",
                "name": "x",
                "mode": "x",
                "product": "x",
                "operator": {}
              },
              "direction": "x",
              "stopovers": [
                {}
              ]
            }
          ],
          "refreshToken": "x"
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
      "query": "Berlin",
      "address": "v1",
      "poi": "v1",
      "result": 10,
      "stop": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "results",
      "stops",
      "addresses",
      "poi"
    ],
    "queryArgs": [
      {
        "name": "address",
        "wire": "addresses"
      },
      {
        "name": "poi",
        "wire": "poi"
      },
      {
        "name": "query",
        "wire": "query"
      },
      {
        "name": "result",
        "wire": "results"
      },
      {
        "name": "stop",
        "wire": "stops"
      }
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
      "south": "v1",
      "west": "v1",
      "result": 256
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "north",
      "west",
      "south",
      "east",
      "results"
    ],
    "queryArgs": [
      {
        "name": "east",
        "wire": "east"
      },
      {
        "name": "north",
        "wire": "north"
      },
      {
        "name": "result",
        "wire": "results"
      },
      {
        "name": "south",
        "wire": "south"
      },
      {
        "name": "west",
        "wire": "west"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "movements": [
        {
          "tripId": "x",
          "direction": "x",
          "line": {
            "type": "line",
            "id": "x",
            "name": "x",
            "mode": "x",
            "product": "x",
            "operator": {}
          },
          "location": {
            "type": "location",
            "latitude": 1,
            "longitude": 1
          },
          "nextStopovers": [
            {
              "stop": {
                "type": "stop",
                "id": "x",
                "name": "x",
                "location": {},
                "products": {},
                "station": {}
              },
              "arrival": "2026-01-01T00:00:00Z",
              "plannedArrival": "2026-01-01T00:00:00Z",
              "departure": "2026-01-01T00:00:00Z",
              "plannedDeparture": "2026-01-01T00:00:00Z"
            }
          ]
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
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "type": "stop",
      "id": "x",
      "name": "x",
      "location": {
        "type": "location",
        "latitude": 1,
        "longitude": 1
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
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "lineName",
      "stopovers"
    ],
    "queryArgs": [
      {
        "name": "line_name",
        "wire": "lineName"
      },
      {
        "name": "stopover",
        "wire": "stopovers"
      }
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
          "type": "location",
          "latitude": 1,
          "longitude": 1
        },
        "products": {},
        "station": {}
      },
      "destination": {
        "type": "stop",
        "id": "x",
        "name": "x",
        "location": {
          "type": "location",
          "latitude": 1,
          "longitude": 1
        },
        "products": {},
        "station": {}
      },
      "stopovers": [
        {
          "stop": {
            "type": "stop",
            "id": "x",
            "name": "x",
            "location": {
              "type": "location",
              "latitude": 1,
              "longitude": 1
            },
            "products": {},
            "station": {}
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
