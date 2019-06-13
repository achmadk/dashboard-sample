import generateLineChart from './line'
import generatePieChart from './pie'
import generateTable from './table'

export const LINE = 'line'
export const BAR = 'bar'
export const PIE = 'pie'
export const TABLE = 'table'

export const defaultChartProps = {
  onInitialized (...args) {
    console.log('init', ...args)
  },
  onUpdate (...args) {
    console.log('update', ...args)
  },
  style: {
    width: '100%',
    height: '100%'
  },
  useResizeHandler: true
}

export const defaultDisplayParams = {
  grouped: false,
  labelAttribute: 'month',
  valueAttribute: 'subtotal',
  sumValue: false,
  countValue: false,
  chartPerLine: 1,
  name: 'Sample'
}

export function generateChartProps (reactStates) {
  const { responses, loading } = reactStates
  return (
    responses?.map(response => {
      const { displays: displayConfigs, items: responseItems } = response || {
        displays: [],
        items: []
      }
      const items = Array.isArray(responseItems)
        ? responseItems
        : Object.values(responseItems).reduce(
            (acc, value) => [...acc, ...value],
            []
          )
      const displays = Array.isArray(responseItems)
        ? displayConfigs
        : displayConfigs.length > 0
        ? Object.keys(responseItems).reduce((acc, key) => {
            return [
              ...acc,
              ...displayConfigs.map(display => {
                const name = `${display?.name || ''} ${key}`
                return {
                  ...display,
                  name,
                  groupedValue: key
                }
              })
            ]
          }, [])
        : Object.keys(responseItems).map(name => {
            return {
              name,
              groupedValue: name
            }
          })
      return displays.map(display => {
        const parameters = { display, items, loading }
        switch (display.type) {
          case LINE:
          case BAR:
            return generateLineChart(parameters)
          case PIE:
            return generatePieChart(parameters)
          case TABLE:
            return generateTable(parameters)
          default:
            return display
        }
      })
    }) || { loading }
  )
}

export function generateLayoutProps (display, items = null) {
  const { name: text } = display || defaultDisplayParams
  return {
    autosize: true,
    title: {
      text
    }
  }
}
