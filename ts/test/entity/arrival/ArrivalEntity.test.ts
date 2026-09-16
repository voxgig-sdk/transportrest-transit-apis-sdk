

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


describe('ArrivalEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORTREST_TRANSIT_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportrestTransitApisSDK.test()
    const ent = testsdk.Arrival()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'arrival.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"delay","req":false,"short":"Delay in seconds","type":"`$INTEGER`","index$":0},{"active":true,"name":"direction","req":false,"short":"Direction of the trip","type":"`$STRING`","index$":1},{"active":true,"name":"line","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"name":"plannedPlatform","req":false,"short":"Originally planned platform","type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"plannedWhen","req":false,"short":"Originally planned arrival time","type":"`$STRING`","index$":4},{"active":true,"name":"platform","req":false,"short":"Arrival platform","type":"`$STRING`","index$":5},{"active":true,"name":"stop","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"tripId","req":false,"short":"Trip identifier","type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"when","req":false,"short":"Scheduled arrival time","type":"`$STRING`","index$":8}],"name":"arrival","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"stop_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":120,"kind":"query","name":"duration","orig":"duration","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":10,"kind":"query","name":"result","orig":"result","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"when","orig":"when","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /stops/{id}/arrivals","json":"{\"operationId\":\"getArrivals\",\"parameters\":[{\"description\":\"Stop/station ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Date and time for which to get arrivals (ISO 8601 format)\",\"in\":\"query\",\"name\":\"when\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Duration in minutes for which to get arrivals\",\"in\":\"query\",\"name\":\"duration\",\"required\":false,\"schema\":{\"default\":120,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Maximum number of arrivals to return\",\"in\":\"query\",\"name\":\"results\",\"required\":false,\"schema\":{\"default\":10,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"arrivals\":{\"items\":{\"properties\":{\"delay\":{\"description\":\"Delay in seconds\",\"type\":\"integer\"},\"direction\":{\"description\":\"Direction of the trip\",\"type\":\"string\"},\"line\":{\"properties\":{\"id\":{\"description\":\"Line identifier\",\"type\":\"string\"},\"mode\":{\"description\":\"Mode of transport\",\"type\":\"string\"},\"name\":{\"description\":\"Line name\",\"type\":\"string\"},\"operator\":{\"description\":\"Operating company\",\"type\":\"object\"},\"product\":{\"description\":\"Product type\",\"type\":\"string\"},\"type\":{\"enum\":[\"line\"],\"type\":\"string\"}},\"type\":\"object\"},\"plannedPlatform\":{\"description\":\"Originally planned platform\",\"type\":\"string\"},\"plannedWhen\":{\"description\":\"Originally planned arrival time\",\"format\":\"date-time\",\"type\":\"string\"},\"platform\":{\"description\":\"Arrival platform\",\"type\":\"string\"},\"stop\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the stop\",\"type\":\"string\"},\"location\":{\"properties\":{\"latitude\":{\"description\":\"Latitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"type\":{\"enum\":[\"location\"],\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the stop\",\"type\":\"string\"},\"products\":{\"description\":\"Available products at this stop\",\"type\":\"object\"},\"station\":{\"description\":\"Parent station if applicable\",\"type\":\"object\"},\"type\":{\"enum\":[\"stop\",\"station\"],\"type\":\"string\"}},\"type\":\"object\"},\"tripId\":{\"description\":\"Trip identifier\",\"type\":\"string\"},\"when\":{\"description\":\"Scheduled arrival time\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with arrivals\"},\"404\":{\"description\":\"Stop not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/stops/{id}/arrivals","rename":{"param":{"id":"stop_id"}},"segments":[{"lit":"stops"},{"var":"stop_id"},{"lit":"arrivals"}],"select":{"exist":["duration","result","stop_id","when"]},"transform":{"req":"`reqdata`","res":"`body.arrivals`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["stop"]]},"key$":"arrival","name__orig":"arrival","Name":"Arrival","name_":"arrival","name-":"arrival","NAME":"ARRIVAL","index$":0}, {"active":true,"entity":"arrival","key$":"BasicArrivalFlow","kind":"basic","name":"BasicArrivalFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"stop_id":"stop01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"arrival_ref01"}}],"index$":0}]}, 'Arrival')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let arrival_ref01_data = Object.values(setup.data.existing.arrival)[0] as any

    // LIST
    const arrival_ref01_ent = client.Arrival()
    const arrival_ref01_match: any = {}
    arrival_ref01_match['stop_id'] = setup.idmap['stop01']

    const arrival_ref01_list = (await arrival_ref01_ent.list(arrival_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/arrival/ArrivalTestData.json')

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
    ['arrival01','arrival02','arrival03','stop01','stop02','stop03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRANSPORTREST_TRANSIT_APIS_TEST_ARRIVAL_ENTID': idmap,
    'TRANSPORTREST_TRANSIT_APIS_TEST_LIVE': 'FALSE',
    'TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRANSPORTREST_TRANSIT_APIS_TEST_ARRIVAL_ENTID']

  const live = 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRANSPORTREST_TRANSIT_APIS_TEST_ARRIVAL_ENTID']
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
  
