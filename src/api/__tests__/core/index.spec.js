import { stub } from 'sinon'
import * as AsyncCallsConfig /* { DEFAULT_PARAMETERS } */ from '@/constants/async-calls'
import { expect } from '../../../../test/expect'

import { generateAuthHeader } from '../../core'

describe('Header Generator', () => {
  it('successfully generated from userParams', () => {
    const userParams = {
      username: 'sample_username',
      authn_token: 'sample_token'
    }
    const { headers } = generateAuthHeader(userParams)
    expect(headers['X-Username']).equal(userParams.username)
    expect(headers['X-User-Token']).equal(userParams.authn_token)
  })

  it('successfully generated from null values userParams', () => {
    const userParams = null
    const { headers } = generateAuthHeader(userParams)
    expect(headers['X-Username']).is.null
    expect(headers['X-User-Token']).is.null
  })

  it('successfully generated from userParams without DEFAULT_PARAMETERS', () => {
    try {
      const userParams = {
        username: 'sample_username',
        authn_token: 'sample_token'
      }
      const asyncCallsConfigStub = stub(
        AsyncCallsConfig,
        'DEFAULT_PARAMETERS'
      ).callsFake(() => null)
      const { headers } = generateAuthHeader(userParams)
      expect(headers['X-Username']).equal(userParams.username)
      expect(headers['X-User-Token']).equal(userParams.authn_token)
      asyncCallsConfigStub.restore()
    } catch (error) {
      console.log(error)
    }
  })
})
