import React from 'react'
// import Dynamic from 'next/dynamic'
import Chart from '@/components/chart/chartist'

// const { Interpolation } = Dynamic(() => import('chartist'), {
//   ssr: false
// })

import generateLineDataProps from './data'

const options = {
  fullWidth: true,
  chartPadding: {
    right: 40
  },
  // lineSmooth: Interpolation.cardinal({
  //   fillHoles: true,
  // }),
  low: 0,
  showArea: true
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
      showLine: false,
      axisX: {
        labelInterpolationFnc: function (value) {
          // Will return M, T, W etc. on small screens
          return value[0]
        }
      }
    }
  ]
]

const type = 'Line'

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
