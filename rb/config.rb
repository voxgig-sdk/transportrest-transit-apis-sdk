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
        "slug" => "transportrest-transit-apis",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
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
              "title" => "Delay",
              "type" => "`$INTEGER`",
              "short" => "Delay in seconds",
            },
            {
              "name" => "direction",
              "title" => "Direction",
              "type" => "`$STRING`",
              "short" => "Direction of the trip",
            },
            {
              "name" => "line",
              "title" => "Line",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "plannedPlatform",
              "title" => "Planned Platform",
              "type" => "`$STRING`",
              "short" => "Originally planned platform",
            },
            {
              "name" => "plannedWhen",
              "title" => "Planned When",
              "type" => "`$STRING`",
              "short" => "Originally planned arrival time",
              "format" => "date-time",
            },
            {
              "name" => "platform",
              "title" => "Platform",
              "type" => "`$STRING`",
              "short" => "Arrival platform",
            },
            {
              "name" => "stop",
              "title" => "Stop",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "tripId",
              "title" => "Trip Id",
              "type" => "`$STRING`",
              "short" => "Trip identifier",
            },
            {
              "name" => "when",
              "title" => "When",
              "type" => "`$STRING`",
              "short" => "Scheduled arrival time",
              "format" => "date-time",
            },
          ],
          "name" => "arrival",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/stops/{id}/arrivals",
                  "segments" => [
                    {
                      "lit" => "stops",
                    },
                    {
                      "var" => "stop_id",
                    },
                    {
                      "lit" => "arrivals",
                    },
                  ],
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.arrivals`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "stop_id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "duration",
                        "orig" => "duration",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 120,
                      },
                      {
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "when",
                        "orig" => "when",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "duration",
                      "result",
                      "stop_id",
                      "when",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.stop",
              ],
            ],
          },
        },
        "departure" => {
          "fields" => [
            {
              "name" => "delay",
              "title" => "Delay",
              "type" => "`$INTEGER`",
              "short" => "Delay in seconds",
            },
            {
              "name" => "direction",
              "title" => "Direction",
              "type" => "`$STRING`",
              "short" => "Direction of the trip",
            },
            {
              "name" => "line",
              "title" => "Line",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "plannedPlatform",
              "title" => "Planned Platform",
              "type" => "`$STRING`",
              "short" => "Originally planned platform",
            },
            {
              "name" => "plannedWhen",
              "title" => "Planned When",
              "type" => "`$STRING`",
              "short" => "Originally planned departure time",
              "format" => "date-time",
            },
            {
              "name" => "platform",
              "title" => "Platform",
              "type" => "`$STRING`",
              "short" => "Departure platform",
            },
            {
              "name" => "stop",
              "title" => "Stop",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "tripId",
              "title" => "Trip Id",
              "type" => "`$STRING`",
              "short" => "Trip identifier",
            },
            {
              "name" => "when",
              "title" => "When",
              "type" => "`$STRING`",
              "short" => "Scheduled departure time",
              "format" => "date-time",
            },
          ],
          "name" => "departure",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/stops/{id}/departures",
                  "segments" => [
                    {
                      "lit" => "stops",
                    },
                    {
                      "var" => "stop_id",
                    },
                    {
                      "lit" => "departures",
                    },
                  ],
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.departures`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "stop_id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "900000003201",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "direction",
                        "orig" => "direction",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "duration",
                        "orig" => "duration",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 120,
                      },
                      {
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "when",
                        "orig" => "when",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
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
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.stop",
              ],
            ],
          },
        },
        "journey" => {
          "fields" => [
            {
              "name" => "legs",
              "title" => "Legs",
              "type" => "`$ARRAY`",
              "short" => "Journey legs",
            },
            {
              "name" => "refreshToken",
              "title" => "Refresh Token",
              "type" => "`$STRING`",
              "short" => "Token to refresh this journey",
            },
            {
              "name" => "type",
              "title" => "Type",
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
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/journeys",
                  "segments" => [
                    {
                      "lit" => "journeys",
                    },
                  ],
                  "parts" => [
                    "journeys",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.journeys`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "arrival",
                        "orig" => "arrival",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "departure",
                        "orig" => "departure",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "from",
                        "orig" => "from",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "900000003201",
                      },
                      {
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 3,
                      },
                      {
                        "name" => "stopover",
                        "orig" => "stopover",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => false,
                      },
                      {
                        "name" => "to",
                        "orig" => "to",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "900000100003",
                      },
                    ],
                  },
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
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the location",
            },
            {
              "name" => "location",
              "title" => "Location",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "short" => "Name of the location",
            },
            {
              "name" => "products",
              "title" => "Products",
              "type" => "`$OBJECT`",
              "short" => "Available products at this location",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "short" => "Type of location",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "location",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/locations",
                  "segments" => [
                    {
                      "lit" => "locations",
                    },
                  ],
                  "parts" => [
                    "locations",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "address",
                        "orig" => "address",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => true,
                      },
                      {
                        "name" => "poi",
                        "orig" => "poi",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => true,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "Berlin",
                      },
                      {
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "stop",
                        "orig" => "stop",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "address",
                      "poi",
                      "query",
                      "result",
                      "stop",
                    ],
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
              "title" => "Direction",
              "type" => "`$STRING`",
              "short" => "Direction of the movement",
            },
            {
              "name" => "line",
              "title" => "Line",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "location",
              "title" => "Location",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "nextStopovers",
              "title" => "Next Stopovers",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "tripId",
              "title" => "Trip Id",
              "type" => "`$STRING`",
              "short" => "Trip identifier",
            },
          ],
          "name" => "radar",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/radar",
                  "segments" => [
                    {
                      "lit" => "radar",
                    },
                  ],
                  "parts" => [
                    "radar",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.movements`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "east",
                        "orig" => "east",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "north",
                        "orig" => "north",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "result",
                        "orig" => "result",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 256,
                      },
                      {
                        "name" => "south",
                        "orig" => "south",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "west",
                        "orig" => "west",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "east",
                      "north",
                      "result",
                      "south",
                      "west",
                    ],
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
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the stop",
            },
            {
              "name" => "location",
              "title" => "Location",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "short" => "Name of the stop",
            },
            {
              "name" => "products",
              "title" => "Products",
              "type" => "`$OBJECT`",
              "short" => "Available products at this stop",
            },
            {
              "name" => "station",
              "title" => "Station",
              "type" => "`$OBJECT`",
              "short" => "Parent station if applicable",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "stop",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/stops/{id}",
                  "segments" => [
                    {
                      "lit" => "stops",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "stops",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "900000003201",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
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
              "title" => "Destination",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "direction",
              "title" => "Direction",
              "type" => "`$STRING`",
              "short" => "Direction of the trip",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Trip identifier",
            },
            {
              "name" => "line",
              "title" => "Line",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "origin",
              "title" => "Origin",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "stopovers",
              "title" => "Stopovers",
              "type" => "`$ARRAY`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "trip",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/trips/{id}",
                  "segments" => [
                    {
                      "lit" => "trips",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "trips",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "line_name",
                        "orig" => "line_name",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "stopover",
                        "orig" => "stopover",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                      "line_name",
                      "stopover",
                    ],
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
