-- TransportrestTransitApis SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "TransportrestTransitApis",
      slug = "transportrest-transit-apis",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://v6.db.transport.rest",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["arrival"] = {},
        ["departure"] = {},
        ["journey"] = {},
        ["location"] = {},
        ["radar"] = {},
        ["stop"] = {},
        ["trip"] = {},
      },
    },
    entity = {
      ["arrival"] = {
        ["fields"] = {
          {
            ["name"] = "delay",
            ["short"] = "Delay in seconds",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "direction",
            ["short"] = "Direction of the trip",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "line",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "plannedPlatform",
            ["short"] = "Originally planned platform",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "plannedWhen",
            ["short"] = "Originally planned arrival time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "platform",
            ["short"] = "Arrival platform",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stop",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "tripId",
            ["short"] = "Trip identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "when",
            ["short"] = "Scheduled arrival time",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "arrival",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "stop_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 120,
                      ["kind"] = "query",
                      ["name"] = "duration",
                      ["orig"] = "duration",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "result",
                      ["orig"] = "result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "when",
                      ["orig"] = "when",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/stops/{id}/arrivals",
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "stop_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "stops",
                  },
                  {
                    ["var"] = "stop_id",
                  },
                  {
                    ["lit"] = "arrivals",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "duration",
                    "result",
                    "stop_id",
                    "when",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.arrivals`",
                },
                ["parts"] = {
                  "stops",
                  "{stop_id}",
                  "arrivals",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "stop",
            },
          },
        },
      },
      ["departure"] = {
        ["fields"] = {
          {
            ["name"] = "delay",
            ["short"] = "Delay in seconds",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "direction",
            ["short"] = "Direction of the trip",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "line",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "plannedPlatform",
            ["short"] = "Originally planned platform",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "plannedWhen",
            ["short"] = "Originally planned departure time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "platform",
            ["short"] = "Departure platform",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stop",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "tripId",
            ["short"] = "Trip identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "when",
            ["short"] = "Scheduled departure time",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "departure",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "900000003201",
                      ["kind"] = "param",
                      ["name"] = "stop_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "direction",
                      ["orig"] = "direction",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 120,
                      ["kind"] = "query",
                      ["name"] = "duration",
                      ["orig"] = "duration",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "result",
                      ["orig"] = "result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "when",
                      ["orig"] = "when",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/stops/{id}/departures",
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "stop_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "stops",
                  },
                  {
                    ["var"] = "stop_id",
                  },
                  {
                    ["lit"] = "departures",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "direction",
                    "duration",
                    "result",
                    "stop_id",
                    "when",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.departures`",
                },
                ["parts"] = {
                  "stops",
                  "{stop_id}",
                  "departures",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "stop",
            },
          },
        },
      },
      ["journey"] = {
        ["fields"] = {
          {
            ["name"] = "legs",
            ["short"] = "Journey legs",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "refreshToken",
            ["short"] = "Token to refresh this journey",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "journey",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "arrival",
                      ["orig"] = "arrival",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "departure",
                      ["orig"] = "departure",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "900000003201",
                      ["kind"] = "query",
                      ["name"] = "from",
                      ["orig"] = "from",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 3,
                      ["kind"] = "query",
                      ["name"] = "result",
                      ["orig"] = "result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "stopover",
                      ["orig"] = "stopover",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "900000100003",
                      ["kind"] = "query",
                      ["name"] = "to",
                      ["orig"] = "to",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/journeys",
                ["segments"] = {
                  {
                    ["lit"] = "journeys",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "arrival",
                    "departure",
                    "from",
                    "result",
                    "stopover",
                    "to",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.journeys`",
                },
                ["parts"] = {
                  "journeys",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["location"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "products",
            ["short"] = "Available products at this location",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "type",
            ["short"] = "Type of location",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "location",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "address",
                      ["orig"] = "address",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "poi",
                      ["orig"] = "poi",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "Berlin",
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "result",
                      ["orig"] = "result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "stop",
                      ["orig"] = "stop",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/locations",
                ["segments"] = {
                  {
                    ["lit"] = "locations",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "address",
                    "poi",
                    "query",
                    "result",
                    "stop",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "locations",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["radar"] = {
        ["fields"] = {
          {
            ["name"] = "direction",
            ["short"] = "Direction of the movement",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "line",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "nextStopovers",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "tripId",
            ["short"] = "Trip identifier",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "radar",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "east",
                      ["orig"] = "east",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "north",
                      ["orig"] = "north",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = 256,
                      ["kind"] = "query",
                      ["name"] = "result",
                      ["orig"] = "result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "south",
                      ["orig"] = "south",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "west",
                      ["orig"] = "west",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/radar",
                ["segments"] = {
                  {
                    ["lit"] = "radar",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "east",
                    "north",
                    "result",
                    "south",
                    "west",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.movements`",
                },
                ["parts"] = {
                  "radar",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["stop"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the stop",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the stop",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "products",
            ["short"] = "Available products at this stop",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "station",
            ["short"] = "Parent station if applicable",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "stop",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "900000003201",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/stops/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "stops",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "stops",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["trip"] = {
        ["fields"] = {
          {
            ["name"] = "destination",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "direction",
            ["short"] = "Direction of the trip",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Trip identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "line",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "origin",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "stopovers",
            ["type"] = "`$ARRAY`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "trip",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "line_name",
                      ["orig"] = "line_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "stopover",
                      ["orig"] = "stopover",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/trips/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "trips",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "line_name",
                    "stopover",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "trips",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
