import generateSlug from '@/utils/slug-generator'

import generateLineChart from './line'
import generateBarChart from './bar'
import generatePieChart from './pie'
import generateTable from './table'

export const LINE = 'line'
export const BAR = 'bar'
export const PIE = 'pie'
export const TABLE = 'table'

export const defaultChartProps = {
  animationEnabled: true,
  exportEnabled: true,
  zoomEnabled: true,
  theme: 'light2'
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
        const data = { display, items, loading }
        const component = generateComponent(data)
        const tag = generateSlug(display?.name || 'Sample Chart')
        const result = {
          component,
          tag
        }
        console.log('result: ', result)
        return result
      })
    }) || { loading }
  )
}

function generateComponent (data) {
  const { display } = data
  switch (display.type) {
    case LINE:
      return generateLineChart(data)
    case BAR:
      return generateBarChart(data)
    case PIE:
      return generatePieChart(data)
    case TABLE:
      return generateTable(data)
    default:
      return display
  }
}
