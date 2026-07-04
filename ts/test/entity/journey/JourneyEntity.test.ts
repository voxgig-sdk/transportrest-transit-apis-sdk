
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { TransportrestTransitApisSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('JourneyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORTRESTTRANSITAPIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORTRESTTRANSITAPIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportrestTransitApisSDK.test()
    const ent = testsdk.Journey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE
    for (const op of ['list']) {
      if (maybeSkipControl(t, 'entityOp', 'journey.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set TRANSPORTREST_TRANSIT_APIS_TEST_JOURNEY_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let journey_ref01_data = Object.values(setup.data.existing.journey)[0] as any

    // LIST
    const journey_ref01_ent = client.Journey()
    const journey_ref01_match: any = {}

    const journey_ref01_list = await journey_ref01_ent.list(journey_ref01_match)


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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['TRANSPORTREST_TRANSIT_APIS_TEST_JOURNEY_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'TRANSPORTREST_TRANSIT_APIS_TEST_JOURNEY_ENTID': idmap,
    'TRANSPORTREST_TRANSIT_APIS_TEST_LIVE': 'FALSE',
    'TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRANSPORTREST_TRANSIT_APIS_TEST_JOURNEY_ENTID']

  const live = 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE

  if (live) {
    client = new TransportrestTransitApisSDK(merge([
      {
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
