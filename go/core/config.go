package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "TransportrestTransitApis",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"active": true,
						"name": "delay",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "direction",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "line",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "planned_platform",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "planned_when",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "platform",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "stop",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "trip_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "when",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
				},
				"name": "arrival",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "stop_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 120,
											"kind": "query",
											"name": "duration",
											"orig": "duration",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 10,
											"kind": "query",
											"name": "result",
											"orig": "result",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "when",
											"orig": "when",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "delay",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "direction",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "line",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "planned_platform",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "planned_when",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "platform",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "stop",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "trip_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "when",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
				},
				"name": "departure",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "900000003201",
											"kind": "param",
											"name": "stop_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "direction",
											"orig": "direction",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 120,
											"kind": "query",
											"name": "duration",
											"orig": "duration",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 10,
											"kind": "query",
											"name": "result",
											"orig": "result",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "when",
											"orig": "when",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "leg",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "refresh_token",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "journey",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "arrival",
											"orig": "arrival",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "departure",
											"orig": "departure",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "900000003201",
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 3,
											"kind": "query",
											"name": "result",
											"orig": "result",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": false,
											"kind": "query",
											"name": "stopover",
											"orig": "stopover",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": "900000100003",
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"location": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "location",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "product",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "location",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "address",
											"orig": "address",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "poi",
											"orig": "poi",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": "Berlin",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 10,
											"kind": "query",
											"name": "result",
											"orig": "result",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "stop",
											"orig": "stop",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"radar": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "direction",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "line",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "location",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "next_stopover",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "trip_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "radar",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "east",
											"orig": "east",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "north",
											"orig": "north",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"example": 256,
											"kind": "query",
											"name": "result",
											"orig": "result",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "south",
											"orig": "south",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "west",
											"orig": "west",
											"reqd": true,
											"type": "`$NUMBER`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"stop": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "location",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "product",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "station",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
				},
				"name": "stop",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "900000003201",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"trip": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "destination",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "direction",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "line",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "origin",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "stopover",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 5,
					},
				},
				"name": "trip",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "line_name",
											"orig": "line_name",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "stopover",
											"orig": "stopover",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
