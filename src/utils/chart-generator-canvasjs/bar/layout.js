export const defaultDisplayParams = {
  grouped: false,
  labelAttribute: 'month',
  valueAttribute: 'subtotal',
  sumValue: false,
  countValue: false,
  chartPerLine: 1,
  name: 'Sample'
}

export default function generateLayoutProps (display, items = null) {
  const { name: text } = display || defaultDisplayParams
  return {
    title: {
      text
    }
  }
}
