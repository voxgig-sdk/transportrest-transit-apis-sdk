

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


describe('RadarEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORTREST_TRANSIT_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportrestTransitApisSDK.test()
    const ent = testsdk.Radar()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'radar.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"direction","req":false,"short":"Direction of the movement","type":"`$STRING`","index$":0},{"active":true,"name":"line","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"location","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"name":"nextStopovers","req":false,"type":"`$ARRAY`","index$":3},{"active":true,"name":"tripId","req":false,"short":"Trip identifier","type":"`$STRING`","index$":4}],"name":"radar","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"east","orig":"east","reqd":true,"type":"`$NUMBER`","index$":0},{"active":true,"kind":"query","name":"north","orig":"north","reqd":true,"type":"`$NUMBER`","index$":1},{"active":true,"example":256,"kind":"query","name":"result","orig":"result","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"south","orig":"south","reqd":true,"type":"`$NUMBER`","index$":3},{"active":true,"kind":"query","name":"west","orig":"west","reqd":true,"type":"`$NUMBER`","index$":4}]},"contract":{"id":"GET /radar","json":"{\"operationId\":\"getRadar\",\"parameters\":[{\"description\":\"Northern latitude boundary\",\"in\":\"query\",\"name\":\"north\",\"required\":true,\"schema\":{\"format\":\"double\",\"type\":\"number\"}},{\"description\":\"Western longitude boundary\",\"in\":\"query\",\"name\":\"west\",\"required\":true,\"schema\":{\"format\":\"double\",\"type\":\"number\"}},{\"description\":\"Southern latitude boundary\",\"in\":\"query\",\"name\":\"south\",\"required\":true,\"schema\":{\"format\":\"double\",\"type\":\"number\"}},{\"description\":\"Eastern longitude boundary\",\"in\":\"query\",\"name\":\"east\",\"required\":true,\"schema\":{\"format\":\"double\",\"type\":\"number\"}},{\"description\":\"Maximum number of vehicles to return\",\"in\":\"query\",\"name\":\"results\",\"required\":false,\"schema\":{\"default\":256,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"movements\":{\"items\":{\"properties\":{\"direction\":{\"description\":\"Direction of the movement\",\"type\":\"string\"},\"line\":{\"properties\":{\"id\":{\"description\":\"Line identifier\",\"type\":\"string\"},\"mode\":{\"description\":\"Mode of transport\",\"type\":\"string\"},\"name\":{\"description\":\"Line name\",\"type\":\"string\"},\"operator\":{\"description\":\"Operating company\",\"type\":\"object\"},\"product\":{\"description\":\"Product type\",\"type\":\"string\"},\"type\":{\"enum\":[\"line\"],\"type\":\"string\"}},\"type\":\"object\"},\"location\":{\"properties\":{\"latitude\":{\"description\":\"Latitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"type\":{\"enum\":[\"location\"],\"type\":\"string\"}},\"type\":\"object\"},\"nextStopovers\":{\"items\":{\"properties\":{\"arrival\":{\"format\":\"date-time\",\"type\":\"string\"},\"departure\":{\"format\":\"date-time\",\"type\":\"string\"},\"plannedArrival\":{\"format\":\"date-time\",\"type\":\"string\"},\"plannedDeparture\":{\"format\":\"date-time\",\"type\":\"string\"},\"stop\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the stop\",\"type\":\"string\"},\"location\":{\"properties\":{\"latitude\":{\"description\":\"Latitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"type\":{\"enum\":[\"location\"],\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the stop\",\"type\":\"string\"},\"products\":{\"description\":\"Available products at this stop\",\"type\":\"object\"},\"station\":{\"description\":\"Parent station if applicable\",\"type\":\"object\"},\"type\":{\"enum\":[\"stop\",\"station\"],\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"tripId\":{\"description\":\"Trip identifier\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with vehicles\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/radar","segments":[{"lit":"radar"}],"select":{"exist":["east","north","result","south","west"]},"transform":{"req":"`reqdata`","res":"`body.movements`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"radar","name__orig":"radar","Name":"Radar","name_":"radar","name-":"radar","NAME":"RADAR","index$":4}, {"active":true,"entity":"radar","key$":"BasicRadarFlow","kind":"basic","name":"BasicRadarFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"radar_ref01"}}],"index$":0}]}, 'Radar')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let radar_ref01_data = Object.values(setup.data.existing.radar)[0] as any

    // LIST
    const radar_ref01_ent = client.Radar()
    const radar_ref01_match: any = {}

    const radar_ref01_list = (await radar_ref01_ent.list(radar_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/radar/RadarTestData.json')

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
    ['radar01','radar02','radar03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRANSPORTREST_TRANSIT_APIS_TEST_RADAR_ENTID': idmap,
    'TRANSPORTREST_TRANSIT_APIS_TEST_LIVE': 'FALSE',
    'TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRANSPORTREST_TRANSIT_APIS_TEST_RADAR_ENTID']

  const live = 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRANSPORTREST_TRANSIT_APIS_TEST_RADAR_ENTID']
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
  
