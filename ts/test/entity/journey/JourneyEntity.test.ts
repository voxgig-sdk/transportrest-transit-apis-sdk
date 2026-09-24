

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"legs":{"a":true,"h":"Legs","n":"legs","r":false,"sh":"Journey legs","t":"`$ARRAY`","key$":"legs","index$":0},"refreshToken":{"a":true,"h":"Refresh Token","n":"refreshToken","r":false,"sh":"Token to refresh this journey","t":"`$STRING`","key$":"refreshToken","index$":1},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":2}},"name":"journey","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /journeys","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"arrival","or":"arrival","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"departure","or":"departure","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"900000003201","k":"query","n":"from","or":"from","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":3,"k":"query","n":"result","or":"result","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":false,"k":"query","n":"stopover","or":"stopover","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"ex":"900000100003","k":"query","n":"to","or":"to","r":true,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/journeys","q":{"exist":["arrival","departure","from","result","stopover","to"]},"r":{},"s":[{"lit":"journeys"}],"t":{"req":"`reqdata`","res":"`body.journeys`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"journey","name__orig":"journey","Name":"Journey","name_":"journey","name-":"journey","NAME":"JOURNEY","index$":2}, {"active":true,"entity":"journey","key$":"BasicJourneyFlow","kind":"basic","name":"BasicJourneyFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"journey_ref01"}}],"index$":0}]}, 'Journey', {"GET /journeys":{"protocol":"http","operationId":"getJourneys","responses":{"200":{"description":"Successful response with journeys","content":{"application/json":{"schema":{"type":"object","properties":{"journeys":{"items":{"properties":{"legs":{"description":"Journey legs","items":{"properties":{"arrival":{"description":"Arrival time","format":"date-time","type":"string"},"departure":{"description":"Departure time","format":"date-time","type":"string"},"destination":{"properties":{"id":{"description":"Unique identifier for the stop","type":"string"},"location":{"properties":{"latitude":{"description":"Latitude coordinate","format":"double","type":"number"},"longitude":{"description":"Longitude coordinate","format":"double","type":"number"},"type":{"enum":["location"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Coordinates"},"name":{"description":"Name of the stop","type":"string"},"products":{"description":"Available products at this stop","type":"object"},"station":{"description":"Parent station if applicable","type":"object"},"type":{"enum":["stop","station"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Stop"},"direction":{"description":"Direction of the leg","type":"string"},"line":{"properties":{"id":{"description":"Line identifier","type":"string"},"mode":{"description":"Mode of transport","type":"string"},"name":{"description":"Line name","type":"string"},"operator":{"description":"Operating company","type":"object"},"product":{"description":"Product type","type":"string"},"type":{"enum":["line"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Line"},"origin":{"properties":{"id":{"description":"Unique identifier for the stop","type":"string"},"location":{"properties":{"latitude":{"description":"Latitude coordinate","format":"double","type":"number"},"longitude":{"description":"Longitude coordinate","format":"double","type":"number"},"type":{"enum":["location"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Coordinates"},"name":{"description":"Name of the stop","type":"string"},"products":{"description":"Available products at this stop","type":"object"},"station":{"description":"Parent station if applicable","type":"object"},"type":{"enum":["stop","station"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Stop"},"plannedArrival":{"description":"Planned arrival time","format":"date-time","type":"string"},"plannedDeparture":{"description":"Planned departure time","format":"date-time","type":"string"},"stopovers":{"items":{"properties":{"arrival":{"format":"date-time","type":"string"},"departure":{"format":"date-time","type":"string"},"plannedArrival":{"format":"date-time","type":"string"},"plannedDeparture":{"format":"date-time","type":"string"},"stop":{"properties":{"id":{"description":"Unique identifier for the stop","type":"string"},"location":{"properties":{"latitude":{"description":"Latitude coordinate","format":"double","type":"number"},"longitude":{"description":"Longitude coordinate","format":"double","type":"number"},"type":{"enum":["location"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Coordinates"},"name":{"description":"Name of the stop","type":"string"},"products":{"description":"Available products at this stop","type":"object"},"station":{"description":"Parent station if applicable","type":"object"},"type":{"enum":["stop","station"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Stop"}},"type":"object","x-ref":"#/components/schemas/Stopover"},"type":"array"}},"type":"object","x-ref":"#/components/schemas/Leg"},"type":"array","key$":"legs"},"refreshToken":{"description":"Token to refresh this journey","type":"string","key$":"refreshToken"},"type":{"enum":["journey"],"type":"string","key$":"type"}},"type":"object","x-ref":"#/components/schemas/Journey","index$":0},"key$":"journeys","type":"array"}}}}}},"400":{"description":"Bad request - invalid parameters"},"500":{"description":"Internal server error"}},"parameters":[{"name":"from","in":"query","description":"Origin location ID or coordinates","required":true,"schema":{"type":"string"},"example":"900000003201","index$":0},{"name":"to","in":"query","description":"Destination location ID or coordinates","required":true,"schema":{"type":"string"},"example":"900000100003","index$":1},{"name":"departure","in":"query","description":"Desired departure time (ISO 8601 format)","required":false,"schema":{"type":"string","format":"date-time"},"index$":2},{"name":"arrival","in":"query","description":"Desired arrival time (ISO 8601 format)","required":false,"schema":{"type":"string","format":"date-time"},"index$":3},{"name":"results","in":"query","description":"Number of journey results to return","required":false,"schema":{"type":"integer","default":3,"minimum":1},"index$":4},{"name":"stopovers","in":"query","description":"Include stopovers in journey details","required":false,"schema":{"type":"boolean","default":false},"index$":5}],"securitySource":"unspecified"}})
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
  
