import React from 'react'
import Chart from '@/components/chart/chartist'

import generatePieDataProps from './data'

const options = {
  labelInterpolationFnc: function (value) {
    console.log('value: ', value)
    // return value[0]
    return value
  },
  labelDirection: 'explode',
  donut: true
}

const responsiveOptions = [
  // ['screen and (min-width: 640px)', {
  //   chartPadding: 30,
  //   labelOffset: 100,
  //   labelDirection: 'explode',
  //   labelInterpolationFnc: function (value) {
  //     return value;
  //   }
  // }],
  // ['screen and (min-width: 1024px)', {
  //   labelOffset: 80,
  //   chartPadding: 20
  // }]
]

const type = 'Pie'

export default function generatePieChart ({ display, items }) {
  const data = generatePieDataProps(display, items)
  const chartProps = {
    data,
    options,
    responsiveOptions,
    type
  }
  return propsFromParent => <Chart {...propsFromParent} {...chartProps} />
}
