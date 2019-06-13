import { expect } from '@/../test/expect'

import { parseDate } from '@/utils/date'

describe('Date Utilities', () => {
  it('parse date to string successfully', () => {
    const result = parseDate(new Date(), 'YYYY-MM')
    expect(result).to.be.not.undefined
  })
})
