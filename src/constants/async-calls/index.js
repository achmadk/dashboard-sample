export const BACKEND_URL = 'https://api-gmf.procura.id'

export const DEFAULT_PARAMETERS = {
  column_defs: '[]',
  filter_params: '{}',
  page: 1,
  per_page: 10,
  sort_info: JSON.stringify({
    fields: ['month'],
    directions: ['asc']
  })
}
