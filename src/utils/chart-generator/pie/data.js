import groupBy from 'lodash.groupby'

const defaultPieChartDisplay = {
  grouped: false,
  labelAttribute: 'month',
  valueAttribute: 'subtotal',
  sumValue: false,
  countValue: false,
  chartPerLine: 1,
  name: 'Sample',
  sourceAttribute: null,
  filtered: false,
  filteredByAttribute: null,
  groupedValue: null,
  preprocessItems: false
}

const defaultResult = {
  hole: 0.4,
  hoverinfo: 'label-value-name',
  name: 'Sample',
  textposition: 'auto',
  type: 'pie'
}

export default function generatePieDataProps (display, resourceItems) {
  const {
    grouped,
    sumValue,
    countValue,
    labelAttribute,
    valueAttribute,
    chartPerLine,
    sourceAttribute,
    groupedValue,
    filtered,
    filteredByAttribute,
    preprocessItems,
    ...otherAttributes
  } = display || defaultPieChartDisplay
  let items =
    preprocessItems && typeof preprocessItems === 'function'
      ? preprocessItems(resourceItems)
      : resourceItems
  let values = []
  let labels = []
  if (filtered) {
    items = items.filter(item => item[filteredByAttribute] == groupedValue)
  }
  if (grouped) {
    const groupedItems = groupBy(items, labelAttribute)
    labels = Object.keys(groupedItems)
    values = Object.values(groupedItems).map(value => {
      if (sumValue)
        return value.reduce((acc, val) => acc + (val[valueAttribute] || 0), 0)
      if (countValue) return value.length
      return 0
    })
  } else {
    values = items.map(item => item[valueAttribute])
    labels = items.map(item => item[labelAttribute])
  }
  return {
    ...defaultResult,
    values,
    labels,
    ...otherAttributes
  }
}
