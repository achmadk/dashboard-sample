import React from 'react'
import Chart from '@/components/chart'

import generatePieDataProps from './data'

import { defaultChartProps, generateLayoutProps } from '@/utils/chart-generator'

export default function generatePieChart ({ display, items }) {
  const data = [generatePieDataProps(display, items)]
  const layout = generateLayoutProps(display)
  const chartProps = {
    ...defaultChartProps,
    data,
    layout
  }
  return propsFromParent => <Chart {...propsFromParent} {...chartProps} />
}
