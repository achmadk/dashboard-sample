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
  // labelY: {
  //   formatString: `#,###'%'`
  // }
}

const defaultResult = {
  showInLegend: true,
  legendText: '{label}',
  indexLabel: '{name}: {y}',
  indexLabelFontSize: 16,
  name: 'Sample',
  // yValueFormatString: "#,###'%'",
  type: 'doughnut'
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
    labelY,
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

  let dataPoints = []
  for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
    for (let labelIndex = 0; labelIndex < labels.length; labelIndex++) {
      if (valueIndex === labelIndex) {
        dataPoints.push({
          y: values[valueIndex],
          name: labels[labelIndex]
        })
      }
    }
  }
  return {
    ...defaultResult,
    dataPoints,
    yValueFormatString: labelY?.formatString || '',
    ...otherAttributes,
    type: 'doughnut'
  }
}
