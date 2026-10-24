

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TransportrestTransitApisSDK, BaseFeature, config, stdutil } from '../../..'

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


describe('DepartureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORTREST_TRANSIT_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportrestTransitApisSDK.test()
    const ent = testsdk.Departure()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TransportrestTransitApisSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Departure().list({"stop_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'departure.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"delay":{"a":true,"h":"Delay","n":"delay","r":false,"sh":"Delay in seconds","t":"`$INTEGER`","key$":"delay","index$":0},"direction":{"a":true,"h":"Direction","n":"direction","r":false,"sh":"Direction of the trip","t":"`$STRING`","key$":"direction","index$":1},"line":{"a":true,"h":"Line","n":"line","r":false,"t":"`$OBJECT`","key$":"line","index$":2},"plannedPlatform":{"a":true,"h":"Planned Platform","n":"plannedPlatform","r":false,"sh":"Originally planned platform","t":"`$STRING`","key$":"plannedPlatform","index$":3},"plannedWhen":{"a":true,"fo":"date-time","h":"Planned When","n":"plannedWhen","r":false,"sh":"Originally planned departure time","t":"`$STRING`","key$":"plannedWhen","index$":4},"platform":{"a":true,"h":"Platform","n":"platform","r":false,"sh":"Departure platform","t":"`$STRING`","key$":"platform","index$":5},"stop":{"a":true,"h":"Stop","n":"stop","r":false,"t":"`$OBJECT`","key$":"stop","index$":6},"tripId":{"a":true,"h":"Trip Id","n":"tripId","r":false,"sh":"Trip identifier","t":"`$STRING`","key$":"tripId","index$":7},"when":{"a":true,"fo":"date-time","h":"When","n":"when","r":false,"sh":"Scheduled departure time","t":"`$STRING`","key$":"when","index$":8}},"name":"departure","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /stops/{id}/departures","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"900000003201","k":"param","n":"stop_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":120,"k":"query","n":"duration","or":"duration","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":10,"k":"query","n":"result","or":"results","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"when","or":"when","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/stops/{id}/departures","q":{"exist":["stop_id"]},"r":{"param":{"id":"stop_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"stops"},{"var":"stop_id"},{"lit":"departures"}],"t":{"req":"`reqdata`","res":"`body.departures`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.stop"]]},"key$":"departure","name__orig":"departure","Name":"Departure","name_":"departure","name-":"departure","NAME":"DEPARTURE","index$":1}, {"active":true,"entity":"departure","key$":"BasicDepartureFlow","kind":"basic","name":"BasicDepartureFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"stop_id":"stop01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"departure_ref01"}}],"index$":0}]}, 'Departure', {"GET /stops/{id}/departures":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"Stop/station ID","required":true,"schema":{"type":"string"},"example":"900000003201","index$":0},{"name":"when","in":"query","description":"Date and time for which to get departures (ISO 8601 format)","required":false,"schema":{"type":"string","format":"date-time"},"index$":1},{"name":"duration","in":"query","description":"Duration in minutes for which to get departures","required":false,"schema":{"type":"integer","default":120,"minimum":1},"index$":2},{"name":"results","in":"query","description":"Maximum number of departures to return","required":false,"schema":{"type":"integer","default":10,"minimum":1},"index$":3},{"name":"direction","in":"query","description":"Filter departures by direction (stop ID)","required":false,"schema":{"type":"string"},"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let departure_ref01_data = Object.values(setup.data.existing.departure)[0] as any

    // LIST
    const departure_ref01_ent = client.Departure()
    const departure_ref01_match: any = {}
    departure_ref01_match['stop_id'] = setup.idmap['stop01']

    const departure_ref01_list = (await departure_ref01_ent.list(departure_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/departure/DepartureTestData.json')

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
    ['departure01','departure02','departure03','stop01','stop02','stop03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRANSPORTREST_TRANSIT_APIS_TEST_DEPARTURE_ENTID': idmap,
    'TRANSPORTREST_TRANSIT_APIS_TEST_LIVE': 'FALSE',
    'TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRANSPORTREST_TRANSIT_APIS_TEST_DEPARTURE_ENTID']

  const live = 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRANSPORTREST_TRANSIT_APIS_TEST_DEPARTURE_ENTID']
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
  
