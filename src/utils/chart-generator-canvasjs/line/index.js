import React from 'react'
import Chart from '@/components/chart/canvasjs'

import generateLineDataProps from './data'
import generateLayoutProps from './layout'

const defaultChartProps = {
  animationEnabled: true,
  exportEnabled: true,
  zoomEnabled: true,
  theme: 'light2'
}

export default function generateLineChart ({ display, items }) {
  const data = generateLineDataProps(display, items)
  const chartProps = {
    options: {
      ...defaultChartProps,
      ...(generateLayoutProps(display, items) || {}),
      data
    }
  }
  return propsFromParent => <Chart {...propsFromParent} {...chartProps} />
}
