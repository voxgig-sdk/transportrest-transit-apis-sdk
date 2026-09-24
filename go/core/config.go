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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Delay",
						"type": "`$INTEGER`",
						"short": "Delay in seconds",
					},
					map[string]any{
						"name": "direction",
						"title": "Direction",
						"type": "`$STRING`",
						"short": "Direction of the trip",
					},
					map[string]any{
						"name": "line",
						"title": "Line",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plannedPlatform",
						"title": "Planned Platform",
						"type": "`$STRING`",
						"short": "Originally planned platform",
					},
					map[string]any{
						"name": "plannedWhen",
						"title": "Planned When",
						"type": "`$STRING`",
						"short": "Originally planned arrival time",
						"format": "date-time",
					},
					map[string]any{
						"name": "platform",
						"title": "Platform",
						"type": "`$STRING`",
						"short": "Arrival platform",
					},
					map[string]any{
						"name": "stop",
						"title": "Stop",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tripId",
						"title": "Trip Id",
						"type": "`$STRING`",
						"short": "Trip identifier",
					},
					map[string]any{
						"name": "when",
						"title": "When",
						"type": "`$STRING`",
						"short": "Scheduled arrival time",
						"format": "date-time",
					},
				},
				"name": "arrival",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/stops/{id}/arrivals",
								"segments": []any{
									map[string]any{
										"lit": "stops",
									},
									map[string]any{
										"var": "stop_id",
									},
									map[string]any{
										"lit": "arrivals",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.arrivals`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "stop_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "duration",
											"orig": "duration",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 120,
										},
										map[string]any{
											"name": "result",
											"orig": "result",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "when",
											"orig": "when",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.stop",
						},
					},
				},
			},
			"departure": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "delay",
						"title": "Delay",
						"type": "`$INTEGER`",
						"short": "Delay in seconds",
					},
					map[string]any{
						"name": "direction",
						"title": "Direction",
						"type": "`$STRING`",
						"short": "Direction of the trip",
					},
					map[string]any{
						"name": "line",
						"title": "Line",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plannedPlatform",
						"title": "Planned Platform",
						"type": "`$STRING`",
						"short": "Originally planned platform",
					},
					map[string]any{
						"name": "plannedWhen",
						"title": "Planned When",
						"type": "`$STRING`",
						"short": "Originally planned departure time",
						"format": "date-time",
					},
					map[string]any{
						"name": "platform",
						"title": "Platform",
						"type": "`$STRING`",
						"short": "Departure platform",
					},
					map[string]any{
						"name": "stop",
						"title": "Stop",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tripId",
						"title": "Trip Id",
						"type": "`$STRING`",
						"short": "Trip identifier",
					},
					map[string]any{
						"name": "when",
						"title": "When",
						"type": "`$STRING`",
						"short": "Scheduled departure time",
						"format": "date-time",
					},
				},
				"name": "departure",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/stops/{id}/departures",
								"segments": []any{
									map[string]any{
										"lit": "stops",
									},
									map[string]any{
										"var": "stop_id",
									},
									map[string]any{
										"lit": "departures",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.departures`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "stop_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "900000003201",
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "duration",
											"orig": "duration",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 120,
										},
										map[string]any{
											"name": "result",
											"orig": "result",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "when",
											"orig": "when",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.stop",
						},
					},
				},
			},
			"journey": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "legs",
						"title": "Legs",
						"type": "`$ARRAY`",
						"short": "Journey legs",
					},
					map[string]any{
						"name": "refreshToken",
						"title": "Refresh Token",
						"type": "`$STRING`",
						"short": "Token to refresh this journey",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
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
								"kind": "http",
								"method": "GET",
								"orig": "/journeys",
								"segments": []any{
									map[string]any{
										"lit": "journeys",
									},
								},
								"parts": []any{
									"journeys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.journeys`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "arrival",
											"orig": "arrival",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "departure",
											"orig": "departure",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "900000003201",
										},
										map[string]any{
											"name": "result",
											"orig": "result",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 3,
										},
										map[string]any{
											"name": "stopover",
											"orig": "stopover",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "900000100003",
										},
									},
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
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the location",
					},
					map[string]any{
						"name": "location",
						"title": "Location",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the location",
					},
					map[string]any{
						"name": "products",
						"title": "Products",
						"type": "`$OBJECT`",
						"short": "Available products at this location",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Type of location",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "location",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/locations",
								"segments": []any{
									map[string]any{
										"lit": "locations",
									},
								},
								"parts": []any{
									"locations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "address",
											"orig": "address",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "poi",
											"orig": "poi",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "Berlin",
										},
										map[string]any{
											"name": "result",
											"orig": "result",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "stop",
											"orig": "stop",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
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
						"title": "Direction",
						"type": "`$STRING`",
						"short": "Direction of the movement",
					},
					map[string]any{
						"name": "line",
						"title": "Line",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "location",
						"title": "Location",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "nextStopovers",
						"title": "Next Stopovers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tripId",
						"title": "Trip Id",
						"type": "`$STRING`",
						"short": "Trip identifier",
					},
				},
				"name": "radar",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/radar",
								"segments": []any{
									map[string]any{
										"lit": "radar",
									},
								},
								"parts": []any{
									"radar",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.movements`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "east",
											"orig": "east",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "north",
											"orig": "north",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "result",
											"orig": "result",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 256,
										},
										map[string]any{
											"name": "south",
											"orig": "south",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "west",
											"orig": "west",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
									},
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
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the stop",
					},
					map[string]any{
						"name": "location",
						"title": "Location",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the stop",
					},
					map[string]any{
						"name": "products",
						"title": "Products",
						"type": "`$OBJECT`",
						"short": "Available products at this stop",
					},
					map[string]any{
						"name": "station",
						"title": "Station",
						"type": "`$OBJECT`",
						"short": "Parent station if applicable",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "stop",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/stops/{id}",
								"segments": []any{
									map[string]any{
										"lit": "stops",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"stops",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "900000003201",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Destination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "direction",
						"title": "Direction",
						"type": "`$STRING`",
						"short": "Direction of the trip",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Trip identifier",
					},
					map[string]any{
						"name": "line",
						"title": "Line",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "origin",
						"title": "Origin",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "stopovers",
						"title": "Stopovers",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "trip",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/trips/{id}",
								"segments": []any{
									map[string]any{
										"lit": "trips",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"trips",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "line_name",
											"orig": "line_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "stopover",
											"orig": "stopover",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"line_name",
										"stopover",
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
