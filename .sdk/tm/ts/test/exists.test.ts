
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { JikanRestSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await JikanRestSDK.test()
    equal(null !== testsdk, true)
  })

})
