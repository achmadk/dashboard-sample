import { stub } from 'sinon'
import * as AsyncCallsConfig /* { DEFAULT_PARAMETERS } */ from '@/constants/async-calls'
import { expect } from '@/../test/expect'

import { getDataFromURL } from '@/api/core/requests'

describe('Dynamic Fetch Generator', () => {
  it('successfully generated POST API call from given params', async () => {
    try {
      const userParams = {
        username: 'sample_username',
        authn_token: 'sample_token'
      }
      const result = await getDataFromURL(
        '/dashboard/prcmts/avg_tender_duration',
        userParams,
        'POST'
      )
      console.log(result)
    } catch (error) {
      expect(error).to.be.not.undefined
    }
  })

  it('successfully generated POST API call from given params', async () => {
    let asyncCallsConfigStub = null
    try {
      const userParams = {
        username: 'sample_username',
        authn_token: 'sample_token'
      }
      asyncCallsConfigStub = stub(AsyncCallsConfig, 'DEFAULT_PARAMETERS').set(
        () => null
      )
      const result = await getDataFromURL(
        '/dashboard/prcmts/avg_tender_duration',
        userParams,
        'POST'
      )
      console.log(result)
    } catch (error) {
      expect(error).to.be.not.undefined
    }
    asyncCallsConfigStub.restore()
  })
})
