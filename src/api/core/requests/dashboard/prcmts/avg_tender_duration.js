import CoreAPI from '@/api/core'

export async function getAverageTenderDuration (userParams) {
  const params = {
    ...userParams,
    column_defs: '[]',
    filter_params: '{}',
    page: 1,
    per_page: 10,
    sort_info: JSON.stringify({
      fields: ['month'],
      directions: ['asc']
    })
  }
  return await CoreAPI.get(
    // eslint-disable-line
    '/dashboard/prcmts/avg_tender_duration',
    { params }
  )
}
