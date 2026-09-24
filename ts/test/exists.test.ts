
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { JikanRestSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = JikanRestSDK.test()
    equal(testsdk instanceof JikanRestSDK, true,
      'JikanRestSDK.test() must return a client synchronously')
  })

})
