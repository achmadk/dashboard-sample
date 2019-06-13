import { expect } from '@/../test/expect'

import generateLineDataProps from '@/utils/chart-generator/line/data'

describe('Line Chart Generator Data Props', () => {
  const items = [
    {
      dates: '2018-10',
      subtotal: 100000,
      year_period: 2018
    },
    {
      dates: '2018-12',
      subtotal: 400000,
      year_period: 2018
    },
    {
      dates: '2018-11',
      subtotal: 200000,
      year_period: 2018
    },
    {
      dates: '2019-01',
      subtotal: 800000,
      year_period: 2019
    },
    {
      dates: '2019-02',
      subtotal: 1600000,
      year_period: 2019
    },
    {
      dates: '2019-03',
      subtotal: 3200000,
      year_period: 2019
    }
  ]

  it('successfully generate data props use default yAttribute', () => {
    const result = generateLineDataProps(null, items)
    expect(result).to.be.not.undefined
  })

  it('successfully generate data props with yAttribute is array', () => {
    const display = {
      yAttribute: [
        {
          label: 'Subtotal',
          attribute: 'subtotal'
        }
      ]
    }
    const result = generateLineDataProps(display, items)
    expect(result).to.be.not.undefined
  })

  it('successfully generate data props with yAttribute is function', () => {
    const display = {
      yAttribute: () => [
        {
          label: 'Subtotal',
          attribute: 'subtotal'
        }
      ]
    }
    const result = generateLineDataProps(display, items)
    expect(result).to.be.not.undefined
  })

  it('successfully generate data props with preprocessItems options', () => {
    const display = {
      yAttribute: () => [
        {
          label: 'Subtotal',
          attribute: 'subtotal'
        }
      ],
      preprocessItems (items) {
        return items.map(item => ({
          ...item,
          subtotal: item.subtotal.toString()
        }))
      }
    }
    const result = generateLineDataProps(display, items)
    expect(result).to.be.not.undefined
  })

  it('successfully generate data props with filter options', () => {
    const display = {
      yAttribute: () => [
        {
          label: 'Subtotal',
          attribute: 'subtotal'
        }
      ],
      filtered: true,
      filteredByAttribute: 'year_period',
      preprocessItems (items) {
        return items.map(item => ({
          ...item,
          subtotal: item.subtotal.toString()
        }))
      }
    }
    const result = generateLineDataProps(display, items)
    expect(result).to.be.not.undefined
  })

  it('successfully generate data props with sort options', () => {
    const display = {
      yAttribute: () => [
        {
          label: 'Subtotal',
          attribute: 'subtotal'
        }
      ],
      sortXByDate: true,
      sortXAttribute: 'dates',
      sortXParseDateFormat: 'YYYY-MM',
      sortXDateUnit: 'month'
    }
    const result = generateLineDataProps(display, items)
    expect(result).to.be.not.undefined
  })
})
