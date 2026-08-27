package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "TransportrestTransitApis",
			"slug": "transportrest-transit-apis",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://v6.db.transport.rest",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"arrival": map[string]any{},
				"departure": map[string]any{},
				"journey": map[string]any{},
				"location": map[string]any{},
				"radar": map[string]any{},
				"stop": map[string]any{},
				"trip": map[string]any{},
			},
		},
		"entity": map[string]any{
			"arrival": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "delay",
						"short": "Delay in seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "direction",
						"short": "Direction of the trip",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "line",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plannedPlatform",
						"short": "Originally planned platform",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "plannedWhen",
						"short": "Originally planned arrival time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "platform",
						"short": "Arrival platform",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stop",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tripId",
						"short": "Trip identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "when",
						"short": "Scheduled arrival time",
						"type": "`$STRING`",
					},
				},
				"name": "arrival",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "stop_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 120,
											"kind": "query",
											"name": "duration",
											"orig": "duration",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "result",
											"orig": "result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "when",
											"orig": "when",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/stops/{id}/arrivals",
								"parts": []any{
									"stops",
									"{stop_id}",
									"arrivals",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "stop_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"duration",
										"result",
										"stop_id",
										"when",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.arrivals`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"stop",
						},
					},
				},
			},
			"departure": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "delay",
						"short": "Delay in seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "direction",
						"short": "Direction of the trip",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "line",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plannedPlatform",
						"short": "Originally planned platform",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "plannedWhen",
						"short": "Originally planned departure time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "platform",
						"short": "Departure platform",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stop",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tripId",
						"short": "Trip identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "when",
						"short": "Scheduled departure time",
						"type": "`$STRING`",
					},
				},
				"name": "departure",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "900000003201",
											"kind": "param",
											"name": "stop_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 120,
											"kind": "query",
											"name": "duration",
											"orig": "duration",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "result",
											"orig": "result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "when",
											"orig": "when",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/stops/{id}/departures",
								"parts": []any{
									"stops",
									"{stop_id}",
									"departures",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "stop_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"duration",
										"result",
										"stop_id",
										"when",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.departures`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"stop",
						},
					},
				},
			},
			"journey": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "legs",
						"short": "Journey legs",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "refreshToken",
						"short": "Token to refresh this journey",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
				},
				"name": "journey",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "arrival",
											"orig": "arrival",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "departure",
											"orig": "departure",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "900000003201",
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 3,
											"kind": "query",
											"name": "result",
											"orig": "result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "stopover",
											"orig": "stopover",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "900000100003",
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/journeys",
								"parts": []any{
									"journeys",
								},
								"select": map[string]any{
									"exist": []any{
										"arrival",
										"departure",
										"from",
										"result",
										"stopover",
										"to",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.journeys`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"location": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "products",
						"short": "Available products at this location",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of location",
						"type": "`$STRING`",
					},
				},
				"name": "location",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "address",
											"orig": "address",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "poi",
											"orig": "poi",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "Berlin",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "result",
											"orig": "result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "stop",
											"orig": "stop",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/locations",
								"parts": []any{
									"locations",
								},
								"select": map[string]any{
									"exist": []any{
										"address",
										"poi",
										"query",
										"result",
										"stop",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"radar": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "direction",
						"short": "Direction of the movement",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "line",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "location",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "nextStopovers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tripId",
						"short": "Trip identifier",
						"type": "`$STRING`",
					},
				},
				"name": "radar",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "east",
											"orig": "east",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "north",
											"orig": "north",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 256,
											"kind": "query",
											"name": "result",
											"orig": "result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "south",
											"orig": "south",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "west",
											"orig": "west",
											"reqd": true,
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/radar",
								"parts": []any{
									"radar",
								},
								"select": map[string]any{
									"exist": []any{
										"east",
										"north",
										"result",
										"south",
										"west",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.movements`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"stop": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the stop",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the stop",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "products",
						"short": "Available products at this stop",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "station",
						"short": "Parent station if applicable",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
				},
				"name": "stop",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "900000003201",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/stops/{id}",
								"parts": []any{
									"stops",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"trip": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "destination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "direction",
						"short": "Direction of the trip",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Trip identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "line",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "origin",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "stopovers",
						"type": "`$ARRAY`",
					},
				},
				"name": "trip",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "line_name",
											"orig": "line_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "stopover",
											"orig": "stopover",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/trips/{id}",
								"parts": []any{
									"trips",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"line_name",
										"stopover",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
