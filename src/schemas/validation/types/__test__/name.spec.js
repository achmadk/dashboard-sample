import { expect } from '@/../test/expect'

import name from '../name'

describe('Validation Scheme - Name', () => {
  it('return value using default label when label option is undefined', () => {
    const result = name()
    expect(result).to.be.not.undefined
  })
})
