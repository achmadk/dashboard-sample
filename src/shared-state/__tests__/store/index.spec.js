import { expect } from '@/../test/expect'

import { middlewares } from '@/shared-state/store'

describe('Shared State - Store', () => {
  it('return middleware if NODE_ENV is production', () => {
    process.env.NODE_ENV = 'production'
    const result = middlewares()
    expect(result).to.exist
  })

  afterEach(() => {
    process.env.NODE_ENV = 'test'
  })
})
