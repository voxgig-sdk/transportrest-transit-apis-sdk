
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TransportrestTransitApisSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TransportrestTransitApisSDK.test()
    equal(testsdk instanceof TransportrestTransitApisSDK, true,
      'TransportrestTransitApisSDK.test() must return a client synchronously')
  })

})
