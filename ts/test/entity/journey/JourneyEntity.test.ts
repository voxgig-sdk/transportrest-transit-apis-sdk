

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


describe('JourneyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORTREST_TRANSIT_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportrestTransitApisSDK.test()
    const ent = testsdk.Journey()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('journey hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of TransportrestTransitApisSDK.test(offline).Journey().stream('list')) { }
    }, /offline/)

    for await (const _item of TransportrestTransitApisSDK.test(offline).Journey()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = TransportrestTransitApisSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Journey().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of TransportrestTransitApisSDK.test().Journey().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new TransportrestTransitApisSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Journey().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Journey().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TransportrestTransitApisSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Journey().list({"arrival":1,"from":"x","to":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'journey.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"legs":{"a":true,"h":"Legs","n":"legs","r":false,"sh":"Journey legs","t":"`$ARRAY`","key$":"legs","index$":0},"refreshToken":{"a":true,"h":"Refresh Token","n":"refreshToken","r":false,"sh":"Token to refresh this journey","t":"`$STRING`","key$":"refreshToken","index$":1},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":2}},"name":"journey","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /journeys","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"arrival","or":"arrival","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"departure","or":"departure","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"900000003201","k":"query","n":"from","or":"from","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":3,"k":"query","n":"result","or":"results","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":false,"k":"query","n":"stopover","or":"stopovers","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"ex":"900000100003","k":"query","n":"to","or":"to","r":true,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/journeys","q":{"exist":["from","to"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"journeys"}],"t":{"req":"`reqdata`","res":"`body.journeys`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"journey","name__orig":"journey","Name":"Journey","name_":"journey","name-":"journey","NAME":"JOURNEY","index$":2}, {"active":true,"entity":"journey","key$":"BasicJourneyFlow","kind":"basic","name":"BasicJourneyFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"journey_ref01"}}],"index$":0}]}, 'Journey', {"GET /journeys":{"protocol":"http","parameters":[{"name":"from","in":"query","description":"Origin location ID or coordinates","required":true,"schema":{"type":"string"},"example":"900000003201","index$":0},{"name":"to","in":"query","description":"Destination location ID or coordinates","required":true,"schema":{"type":"string"},"example":"900000100003","index$":1},{"name":"departure","in":"query","description":"Desired departure time (ISO 8601 format)","required":false,"schema":{"type":"string","format":"date-time"},"index$":2},{"name":"arrival","in":"query","description":"Desired arrival time (ISO 8601 format)","required":false,"schema":{"type":"string","format":"date-time"},"index$":3},{"name":"results","in":"query","description":"Number of journey results to return","required":false,"schema":{"type":"integer","default":3,"minimum":1},"index$":4},{"name":"stopovers","in":"query","description":"Include stopovers in journey details","required":false,"schema":{"type":"boolean","default":false},"index$":5}]}}, { strict: LIVE_STRICT, t })
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
  
