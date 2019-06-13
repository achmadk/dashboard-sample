import { parseDate } from '@/utils/date'

const defaultDisplayParams = {
  xAttribute: 'dates',
  yAttribute: 'subtotal',
  sortXByDate: false,
  sortXAttribute: 'month',
  sortXDateUnit: 'month',
  sortXParseDateFormat: 'YYYY-MM',
  filtered: false,
  filteredByAttribute: null,
  groupedValue: null,
  preprocessItems: false
}

const defaultResult = {
  labels: [],
  series: []
}

export default function generatePieDataProps (display, items) {
  const { yAttribute } = display || defaultDisplayParams
  if (Array.isArray(yAttribute)) {
    return yAttribute.map(yAttr => generateResult(yAttr, display, items))
  }
  if (typeof yAttribute === 'function') {
    return yAttribute(items).map(yAttr => generateResult(yAttr, display, items))
  }
  return [generateResult(yAttribute, display, items)]
}

function generateResult (yAttribute, display, resourceItems) {
  const {
    xAttribute,
    sortXByDate,
    sortXAttribute,
    sortXDateUnit,
    sortXParseDateFormat,
    filtered,
    filteredByAttribute,
    groupedValue,
    preprocessItems,
    ...otherAttributes
  } = display || defaultDisplayParams
  let labels = []
  let series = []
  let items =
    preprocessItems && typeof preprocessItems === 'function'
      ? preprocessItems(resourceItems)
      : resourceItems
  let attribute = null
  if (typeof yAttribute !== 'string') {
    label = yAttribute.label
    attribute = yAttribute.attribute
  }
  if (filtered) {
    items = items.filter(item => item[filteredByAttribute] == groupedValue)
  }
  if (sortXByDate) {
    items = items.sort((a, b) => {
      const [dayA, dayB] = [a[sortXAttribute], b[sortXAttribute]].map(day =>
        parseDate(day, sortXParseDateFormat)
      )
      return dayA.isAfter(dayB, sortXDateUnit) ? 1 : -1
    })
  }
  labels = items.map(item => item[xAttribute])
  series = [items.map(item => item[attribute || yAttribute])]
  return {
    ...defaultResult,
    ...otherAttributes,
    labels,
    series
  }
}
