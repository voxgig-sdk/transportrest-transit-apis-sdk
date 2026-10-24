

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


describe('TripEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORTREST_TRANSIT_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportrestTransitApisSDK.test()
    const ent = testsdk.Trip()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TransportrestTransitApisSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Trip().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'trip.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"destination":{"a":true,"h":"Destination","n":"destination","r":false,"t":"`$OBJECT`","key$":"destination","index$":0},"direction":{"a":true,"h":"Direction","n":"direction","r":false,"sh":"Direction of the trip","t":"`$STRING`","key$":"direction","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Trip identifier","t":"`$STRING`","key$":"id","index$":2},"line":{"a":true,"h":"Line","n":"line","r":false,"t":"`$OBJECT`","key$":"line","index$":3},"origin":{"a":true,"h":"Origin","n":"origin","r":false,"t":"`$OBJECT`","key$":"origin","index$":4},"stopovers":{"a":true,"h":"Stopovers","n":"stopovers","r":false,"t":"`$ARRAY`","key$":"stopovers","index$":5}},"id":{"field":"id","name":"id"},"name":"trip","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /trips/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"line_name","or":"lineName","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":true,"k":"query","n":"stopover","or":"stopovers","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/trips/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"trips"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"trip","name__orig":"trip","Name":"Trip","name_":"trip","name-":"trip","NAME":"TRIP","index$":6}, {"active":true,"entity":"trip","key$":"BasicTripFlow","kind":"basic","name":"BasicTripFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"trip_ref01","srcdatavar":"trip_ref01_data","suffix":"_dt0"},"m":{"id":"trip01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-trip_ref01"}}],"index$":0}]}, 'Trip', {"GET /trips/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"Trip ID","required":true,"schema":{"type":"string"},"index$":0},{"name":"lineName","in":"query","description":"Line name of the trip","required":false,"schema":{"type":"string"},"index$":1},{"name":"stopovers","in":"query","description":"Include stopovers in trip details","required":false,"schema":{"type":"boolean","default":true},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let trip_ref01_data = Object.values(setup.data.existing.trip)[0] as any

    // LOAD
    const trip_ref01_ent = client.Trip()
    const trip_ref01_match_dt0: any = {}
    trip_ref01_match_dt0.id = trip_ref01_data.id
    const trip_ref01_data_dt0 = (await trip_ref01_ent.load(trip_ref01_match_dt0)).data()
    assert(trip_ref01_data_dt0.id === trip_ref01_data.id)


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
      '../../../../.sdk/test/entity/trip/TripTestData.json')

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
    ['trip01','trip02','trip03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRANSPORTREST_TRANSIT_APIS_TEST_TRIP_ENTID': idmap,
    'TRANSPORTREST_TRANSIT_APIS_TEST_LIVE': 'FALSE',
    'TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRANSPORTREST_TRANSIT_APIS_TEST_TRIP_ENTID']

  const live = 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRANSPORTREST_TRANSIT_APIS_TEST_TRIP_ENTID']
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
  
