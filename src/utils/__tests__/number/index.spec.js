import { expect } from '@/../test/expect'

import { formatCurrency } from '@/utils/number'

describe('Number Method Utilities', () => {
  it('return formatted number string if parameter data type is number', () => {
    const result = formatCurrency(100000)
    expect(result).to.exist
  })
})
