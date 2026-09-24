

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


describe('LocationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORTREST_TRANSIT_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportrestTransitApisSDK.test()
    const ent = testsdk.Location()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'location.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the location","t":"`$STRING`","key$":"id","index$":0},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$OBJECT`","key$":"location","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the location","t":"`$STRING`","key$":"name","index$":2},"products":{"a":true,"h":"Products","n":"products","r":false,"sh":"Available products at this location","t":"`$OBJECT`","key$":"products","index$":3},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type of location","t":"`$STRING`","key$":"type","index$":4}},"id":{"field":"id","name":"id"},"name":"location","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /locations","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":true,"k":"query","n":"address","or":"address","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":true,"k":"query","n":"poi","or":"poi","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":"Berlin","k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":10,"k":"query","n":"result","or":"result","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":true,"k":"query","n":"stop","or":"stop","r":false,"t":"`$BOOLEAN`","index$":4}]},"k":"http","m":"GET","o":"/locations","q":{"exist":["address","poi","query","result","stop"]},"r":{},"s":[{"lit":"locations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"location","name__orig":"location","Name":"Location","name_":"location","name-":"location","NAME":"LOCATION","index$":3}, {"active":true,"entity":"location","key$":"BasicLocationFlow","kind":"basic","name":"BasicLocationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"location_ref01"}}],"index$":0}]}, 'Location', {"GET /locations":{"protocol":"http","operationId":"searchLocations","responses":{"200":{"description":"Successful response with locations","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"type":{"type":"string","enum":["stop","station","location","address","poi"],"description":"Type of location","key$":"type"},"id":{"type":"string","description":"Unique identifier for the location","key$":"id"},"name":{"type":"string","description":"Name of the location","key$":"name"},"location":{"type":"object","properties":{"type":{"enum":["location"],"type":"string"},"latitude":{"description":"Latitude coordinate","format":"double","type":"number"},"longitude":{"description":"Longitude coordinate","format":"double","type":"number"}},"x-ref":"#/components/schemas/Coordinates","key$":"location"},"products":{"type":"object","description":"Available products at this location","key$":"products"}},"x-ref":"#/components/schemas/Location","index$":0}}}}},"400":{"description":"Bad request - invalid parameters"},"500":{"description":"Internal server error"}},"parameters":[{"name":"query","in":"query","description":"Search query for locations","required":true,"schema":{"type":"string"},"example":"Berlin","index$":0},{"name":"results","in":"query","description":"Number of results to return","required":false,"schema":{"type":"integer","default":10,"minimum":1,"maximum":100},"index$":1},{"name":"stops","in":"query","description":"Include stops/stations in results","required":false,"schema":{"type":"boolean","default":true},"index$":2},{"name":"addresses","in":"query","description":"Include addresses in results","required":false,"schema":{"type":"boolean","default":true},"index$":3},{"name":"poi","in":"query","description":"Include points of interest in results","required":false,"schema":{"type":"boolean","default":true},"index$":4}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let location_ref01_data = Object.values(setup.data.existing.location)[0] as any

    // LIST
    const location_ref01_ent = client.Location()
    const location_ref01_match: any = {}

    const location_ref01_list = (await location_ref01_ent.list(location_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/location/LocationTestData.json')

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
    ['location01','location02','location03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRANSPORTREST_TRANSIT_APIS_TEST_LOCATION_ENTID': idmap,
    'TRANSPORTREST_TRANSIT_APIS_TEST_LIVE': 'FALSE',
    'TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRANSPORTREST_TRANSIT_APIS_TEST_LOCATION_ENTID']

  const live = 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRANSPORTREST_TRANSIT_APIS_TEST_LOCATION_ENTID']
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
  
