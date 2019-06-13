import React from 'react'
import Chart from '@/components/chart/chartist'

import generateLineDataProps from '../line/data'

const options = {
  seriesBarDistance: 10,
  fullWidth: true
}

const responsiveOptions = [
  [
    'screen and (min-width: 641px) and (max-width: 1024px)',
    {
      showPoint: false,
      axisX: {
        labelInterpolationFnc: function (value) {
          // Will return Mon, Tue, Wed etc. on medium screens
          return value.slice(0, 3)
        }
      }
    }
  ],
  [
    'screen and (max-width: 640px)',
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value, index) {
          return index % 2 === 0 ? value : null
        }
      }
    }
  ]
]

const type = 'Bar'

export default function generateLineChart ({ display, items }) {
  const data = generateLineDataProps(display, items)
  const chartProps = {
    type,
    data,
    options,
    responsiveOptions
  }
  return propsFromParent => <Chart {...propsFromParent} {...chartProps} />
}
