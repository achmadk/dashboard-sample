import React from 'react'
import Chart from '@/components/chart'

import generateLineDataProps from './data'

import { defaultChartProps, generateLayoutProps } from '@/utils/chart-generator'

export default function generateLineChart ({ display, items }) {
  const data = generateLineDataProps(display, items)
  const layout = generateLayoutProps(display)
  const chartProps = {
    ...defaultChartProps,
    data,
    layout
  }
  return propsFromParent => <Chart {...propsFromParent} {...chartProps} />
}
