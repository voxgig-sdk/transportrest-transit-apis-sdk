
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TransportrestTransitApisSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TransportrestTransitApisSDK.test()
    equal(null !== testsdk, true)
  })

})
