import React from 'react'
import Chart from '@/components/chart/canvasjs'

import generatePieDataProps from './data'
import generateLayoutProps from './layout'

const defaultChartProps = {
  animationEnabled: true,
  exportEnabled: true,
  zoomEnabled: true,
  theme: 'light2'
}

export default function generatePieChart ({ display, items }) {
  const data = [generatePieDataProps(display, items)]
  const layout = generateLayoutProps(display) || {}
  const chartProps = {
    options: {
      ...defaultChartProps,
      data,
      ...layout
    }
  }
  return propsFromParent => <Chart {...propsFromParent} {...chartProps} />
}
