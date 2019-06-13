import { expect } from '@/../test/expect'

import { getUserParams } from '@/shared-state/map-state-to-props/user'

describe('Map State To Props from user state', () => {
  it('return isAuthenticated value is false if no data from user state', () => {
    const params = { data: null }
    const result = getUserParams(params)
    expect(result.isAuthenticated).to.be.false
  })
})
