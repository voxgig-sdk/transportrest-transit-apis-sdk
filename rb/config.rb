# TransportrestTransitApis SDK configuration

module TransportrestTransitApisConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "TransportrestTransitApis",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://v6.db.transport.rest",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "arrival" => {},
          "departure" => {},
          "journey" => {},
          "location" => {},
          "radar" => {},
          "stop" => {},
          "trip" => {},
        },
      },
      "entity" => {
        "arrival" => {
          "fields" => [
            {
              "name" => "delay",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "direction",
              "type" => "`$STRING`",
            },
            {
              "name" => "line",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "plannedPlatform",
              "type" => "`$STRING`",
            },
            {
              "name" => "plannedWhen",
              "type" => "`$STRING`",
            },
            {
              "name" => "platform",
              "type" => "`$STRING`",
            },
            {
              "name" => "stop",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "tripId",
              "type" => "`$STRING`",
            },
            {
              "name" => "when",
              "type" => "`$STRING`",
            },
          ],
          "name" => "arrival",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "stop_id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => 120,
                        "kind" => "query",
                        "name" => "duration",
                        "orig" => "duration",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "when",
                        "orig" => "when",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/stops/{id}/arrivals",
                  "parts" => [
                    "stops",
                    "{stop_id}",
                    "arrivals",
                  ],
                  "rename" => {
                    "param" => {
                      "id" => "stop_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "duration",
                      "result",
                      "stop_id",
                      "when",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.arrivals`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "stop",
              ],
            ],
          },
        },
        "departure" => {
          "fields" => [
            {
              "name" => "delay",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "direction",
              "type" => "`$STRING`",
            },
            {
              "name" => "line",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "plannedPlatform",
              "type" => "`$STRING`",
            },
            {
              "name" => "plannedWhen",
              "type" => "`$STRING`",
            },
            {
              "name" => "platform",
              "type" => "`$STRING`",
            },
            {
              "name" => "stop",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "tripId",
              "type" => "`$STRING`",
            },
            {
              "name" => "when",
              "type" => "`$STRING`",
            },
          ],
          "name" => "departure",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "900000003201",
                        "kind" => "param",
                        "name" => "stop_id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "direction",
                        "orig" => "direction",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 120,
                        "kind" => "query",
                        "name" => "duration",
                        "orig" => "duration",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "when",
                        "orig" => "when",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/stops/{id}/departures",
                  "parts" => [
                    "stops",
                    "{stop_id}",
                    "departures",
                  ],
                  "rename" => {
                    "param" => {
                      "id" => "stop_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "direction",
                      "duration",
                      "result",
                      "stop_id",
                      "when",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.departures`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "stop",
              ],
            ],
          },
        },
        "journey" => {
          "fields" => [
            {
              "name" => "legs",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "refreshToken",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "journey",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "arrival",
                        "orig" => "arrival",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "departure",
                        "orig" => "departure",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "900000003201",
                        "kind" => "query",
                        "name" => "from",
                        "orig" => "from",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 3,
                        "kind" => "query",
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "stopover",
                        "orig" => "stopover",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => "900000100003",
                        "kind" => "query",
                        "name" => "to",
                        "orig" => "to",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/journeys",
                  "parts" => [
                    "journeys",
                  ],
                  "select" => {
                    "exist" => [
                      "arrival",
                      "departure",
                      "from",
                      "result",
                      "stopover",
                      "to",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.journeys`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "location" => {
          "fields" => [
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "products",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "location",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "address",
                        "orig" => "address",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "poi",
                        "orig" => "poi",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => "Berlin",
                        "kind" => "query",
                        "name" => "query",
                        "orig" => "query",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "stop",
                        "orig" => "stop",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/locations",
                  "parts" => [
                    "locations",
                  ],
                  "select" => {
                    "exist" => [
                      "address",
                      "poi",
                      "query",
                      "result",
                      "stop",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "radar" => {
          "fields" => [
            {
              "name" => "direction",
              "type" => "`$STRING`",
            },
            {
              "name" => "line",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "location",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "nextStopovers",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "tripId",
              "type" => "`$STRING`",
            },
          ],
          "name" => "radar",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "east",
                        "orig" => "east",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "north",
                        "orig" => "north",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => 256,
                        "kind" => "query",
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "south",
                        "orig" => "south",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "west",
                        "orig" => "west",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/radar",
                  "parts" => [
                    "radar",
                  ],
                  "select" => {
                    "exist" => [
                      "east",
                      "north",
                      "result",
                      "south",
                      "west",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.movements`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "stop" => {
          "fields" => [
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "products",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "station",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "stop",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "900000003201",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/stops/{id}",
                  "parts" => [
                    "stops",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "trip" => {
          "fields" => [
            {
              "name" => "destination",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "direction",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "line",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "origin",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "stopovers",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "trip",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "line_name",
                        "orig" => "line_name",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "stopover",
                        "orig" => "stopover",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/trips/{id}",
                  "parts" => [
                    "trips",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                      "line_name",
                      "stopover",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    TransportrestTransitApisFeatures.make_feature(name)
  end
end
