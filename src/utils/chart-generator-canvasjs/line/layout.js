export const defaultDisplayParams = {
  grouped: false,
  labelAttribute: 'month',
  valueAttribute: 'subtotal',
  sumValue: false,
  countValue: false,
  chartPerLine: 1,
  name: 'Sample',
  labelX: {
    title: 'Label X'
  },
  labelY: {
    title: 'Label Y'
  }
}

export default function generateLayoutProps (display, items = null) {
  const { name: text, labelX: axisX, labelY: axisY } =
    display || defaultDisplayParams
  return {
    title: {
      text
    },
    axisX,
    axisY
  }
}
