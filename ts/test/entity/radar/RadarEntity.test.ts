

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"direction":{"a":true,"h":"Direction","n":"direction","r":false,"sh":"Direction of the movement","t":"`$STRING`","key$":"direction","index$":0},"line":{"a":true,"h":"Line","n":"line","r":false,"t":"`$OBJECT`","key$":"line","index$":1},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$OBJECT`","key$":"location","index$":2},"nextStopovers":{"a":true,"h":"Next Stopovers","n":"nextStopovers","r":false,"t":"`$ARRAY`","key$":"nextStopovers","index$":3},"tripId":{"a":true,"h":"Trip Id","n":"tripId","r":false,"sh":"Trip identifier","t":"`$STRING`","key$":"tripId","index$":4}},"name":"radar","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /radar","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"east","or":"east","r":true,"t":"`$NUMBER`","index$":0},{"a":true,"k":"query","n":"north","or":"north","r":true,"t":"`$NUMBER`","index$":1},{"a":true,"ex":256,"k":"query","n":"result","or":"result","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"south","or":"south","r":true,"t":"`$NUMBER`","index$":3},{"a":true,"k":"query","n":"west","or":"west","r":true,"t":"`$NUMBER`","index$":4}]},"k":"http","m":"GET","o":"/radar","q":{"exist":["east","north","result","south","west"]},"r":{},"s":[{"lit":"radar"}],"t":{"req":"`reqdata`","res":"`body.movements`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"radar","name__orig":"radar","Name":"Radar","name_":"radar","name-":"radar","NAME":"RADAR","index$":4}, {"active":true,"entity":"radar","key$":"BasicRadarFlow","kind":"basic","name":"BasicRadarFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"radar_ref01"}}],"index$":0}]}, 'Radar', {"GET /radar":{"protocol":"http","operationId":"getRadar","responses":{"200":{"description":"Successful response with vehicles","content":{"application/json":{"schema":{"type":"object","properties":{"movements":{"items":{"properties":{"direction":{"description":"Direction of the movement","type":"string","key$":"direction"},"line":{"properties":{"id":{"description":"Line identifier","type":"string"},"mode":{"description":"Mode of transport","type":"string"},"name":{"description":"Line name","type":"string"},"operator":{"description":"Operating company","type":"object"},"product":{"description":"Product type","type":"string"},"type":{"enum":["line"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Line","key$":"line"},"location":{"properties":{"latitude":{"description":"Latitude coordinate","format":"double","type":"number"},"longitude":{"description":"Longitude coordinate","format":"double","type":"number"},"type":{"enum":["location"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Coordinates","key$":"location"},"nextStopovers":{"items":{"properties":{"arrival":{"format":"date-time","type":"string"},"departure":{"format":"date-time","type":"string"},"plannedArrival":{"format":"date-time","type":"string"},"plannedDeparture":{"format":"date-time","type":"string"},"stop":{"properties":{"id":{"description":"Unique identifier for the stop","type":"string"},"location":{"properties":{"latitude":{"description":"Latitude coordinate","format":"double","type":"number"},"longitude":{"description":"Longitude coordinate","format":"double","type":"number"},"type":{"enum":["location"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Coordinates"},"name":{"description":"Name of the stop","type":"string"},"products":{"description":"Available products at this stop","type":"object"},"station":{"description":"Parent station if applicable","type":"object"},"type":{"enum":["stop","station"],"type":"string"}},"type":"object","x-ref":"#/components/schemas/Stop"}},"type":"object","x-ref":"#/components/schemas/Stopover"},"type":"array","key$":"nextStopovers"},"tripId":{"description":"Trip identifier","type":"string","key$":"tripId"}},"type":"object","x-ref":"#/components/schemas/Movement","index$":0},"key$":"movements","type":"array"}}}}}},"400":{"description":"Bad request - invalid parameters"},"500":{"description":"Internal server error"}},"parameters":[{"name":"north","in":"query","description":"Northern latitude boundary","required":true,"schema":{"type":"number","format":"double"},"index$":0},{"name":"west","in":"query","description":"Western longitude boundary","required":true,"schema":{"type":"number","format":"double"},"index$":1},{"name":"south","in":"query","description":"Southern latitude boundary","required":true,"schema":{"type":"number","format":"double"},"index$":2},{"name":"east","in":"query","description":"Eastern longitude boundary","required":true,"schema":{"type":"number","format":"double"},"index$":3},{"name":"results","in":"query","description":"Maximum number of vehicles to return","required":false,"schema":{"type":"integer","default":256},"index$":4}],"securitySource":"unspecified"}})
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
  
