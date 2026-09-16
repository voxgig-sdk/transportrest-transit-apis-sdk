

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TransportrestTransitApisSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('JourneyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORTREST_TRANSIT_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportrestTransitApisSDK.test()
    const ent = testsdk.Journey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'journey.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"legs","req":false,"short":"Journey legs","type":"`$ARRAY`","index$":0},{"active":true,"name":"refreshToken","req":false,"short":"Token to refresh this journey","type":"`$STRING`","index$":1},{"active":true,"name":"type","req":false,"type":"`$STRING`","index$":2}],"name":"journey","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"arrival","orig":"arrival","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"departure","orig":"departure","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"900000003201","kind":"query","name":"from","orig":"from","reqd":true,"type":"`$STRING`","index$":2},{"active":true,"example":3,"kind":"query","name":"result","orig":"result","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"example":false,"kind":"query","name":"stopover","orig":"stopover","reqd":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"example":"900000100003","kind":"query","name":"to","orig":"to","reqd":true,"type":"`$STRING`","index$":5}]},"contract":{"id":"GET /journeys","json":"{\"operationId\":\"getJourneys\",\"parameters\":[{\"description\":\"Origin location ID or coordinates\",\"example\":\"900000003201\",\"in\":\"query\",\"name\":\"from\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Destination location ID or coordinates\",\"example\":\"900000100003\",\"in\":\"query\",\"name\":\"to\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Desired departure time (ISO 8601 format)\",\"in\":\"query\",\"name\":\"departure\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Desired arrival time (ISO 8601 format)\",\"in\":\"query\",\"name\":\"arrival\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Number of journey results to return\",\"in\":\"query\",\"name\":\"results\",\"required\":false,\"schema\":{\"default\":3,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Include stopovers in journey details\",\"in\":\"query\",\"name\":\"stopovers\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"journeys\":{\"items\":{\"properties\":{\"legs\":{\"description\":\"Journey legs\",\"items\":{\"properties\":{\"arrival\":{\"description\":\"Arrival time\",\"format\":\"date-time\",\"type\":\"string\"},\"departure\":{\"description\":\"Departure time\",\"format\":\"date-time\",\"type\":\"string\"},\"destination\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the stop\",\"type\":\"string\"},\"location\":{\"properties\":{\"latitude\":{\"description\":\"Latitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"type\":{\"enum\":[\"location\"],\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the stop\",\"type\":\"string\"},\"products\":{\"description\":\"Available products at this stop\",\"type\":\"object\"},\"station\":{\"description\":\"Parent station if applicable\",\"type\":\"object\"},\"type\":{\"enum\":[\"stop\",\"station\"],\"type\":\"string\"}},\"type\":\"object\"},\"direction\":{\"description\":\"Direction of the leg\",\"type\":\"string\"},\"line\":{\"properties\":{\"id\":{\"description\":\"Line identifier\",\"type\":\"string\"},\"mode\":{\"description\":\"Mode of transport\",\"type\":\"string\"},\"name\":{\"description\":\"Line name\",\"type\":\"string\"},\"operator\":{\"description\":\"Operating company\",\"type\":\"object\"},\"product\":{\"description\":\"Product type\",\"type\":\"string\"},\"type\":{\"enum\":[\"line\"],\"type\":\"string\"}},\"type\":\"object\"},\"origin\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the stop\",\"type\":\"string\"},\"location\":{\"properties\":{\"latitude\":{\"description\":\"Latitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"type\":{\"enum\":[\"location\"],\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the stop\",\"type\":\"string\"},\"products\":{\"description\":\"Available products at this stop\",\"type\":\"object\"},\"station\":{\"description\":\"Parent station if applicable\",\"type\":\"object\"},\"type\":{\"enum\":[\"stop\",\"station\"],\"type\":\"string\"}},\"type\":\"object\"},\"plannedArrival\":{\"description\":\"Planned arrival time\",\"format\":\"date-time\",\"type\":\"string\"},\"plannedDeparture\":{\"description\":\"Planned departure time\",\"format\":\"date-time\",\"type\":\"string\"},\"stopovers\":{\"items\":{\"properties\":{\"arrival\":{\"format\":\"date-time\",\"type\":\"string\"},\"departure\":{\"format\":\"date-time\",\"type\":\"string\"},\"plannedArrival\":{\"format\":\"date-time\",\"type\":\"string\"},\"plannedDeparture\":{\"format\":\"date-time\",\"type\":\"string\"},\"stop\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the stop\",\"type\":\"string\"},\"location\":{\"properties\":{\"latitude\":{\"description\":\"Latitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"type\":{\"enum\":[\"location\"],\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the stop\",\"type\":\"string\"},\"products\":{\"description\":\"Available products at this stop\",\"type\":\"object\"},\"station\":{\"description\":\"Parent station if applicable\",\"type\":\"object\"},\"type\":{\"enum\":[\"stop\",\"station\"],\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"},\"refreshToken\":{\"description\":\"Token to refresh this journey\",\"type\":\"string\"},\"type\":{\"enum\":[\"journey\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with journeys\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/journeys","segments":[{"lit":"journeys"}],"select":{"exist":["arrival","departure","from","result","stopover","to"]},"transform":{"req":"`reqdata`","res":"`body.journeys`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"journey","name__orig":"journey","Name":"Journey","name_":"journey","name-":"journey","NAME":"JOURNEY","index$":2}, {"active":true,"entity":"journey","key$":"BasicJourneyFlow","kind":"basic","name":"BasicJourneyFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"journey_ref01"}}],"index$":0}]}, 'Journey')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let journey_ref01_data = Object.values(setup.data.existing.journey)[0] as any

    // LIST
    const journey_ref01_ent = client.Journey()
    const journey_ref01_match: any = {}

    const journey_ref01_list = (await journey_ref01_ent.list(journey_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/journey/JourneyTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TransportrestTransitApisSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['journey01','journey02','journey03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRANSPORTREST_TRANSIT_APIS_TEST_JOURNEY_ENTID': idmap,
    'TRANSPORTREST_TRANSIT_APIS_TEST_LIVE': 'FALSE',
    'TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRANSPORTREST_TRANSIT_APIS_TEST_JOURNEY_ENTID']

  const live = 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRANSPORTREST_TRANSIT_APIS_TEST_JOURNEY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TransportrestTransitApisSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
