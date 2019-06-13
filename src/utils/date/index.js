import DayJS from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

DayJS.extend(customParseFormat)

export function parseDate (date, format) {
  return DayJS(date, format)
}
