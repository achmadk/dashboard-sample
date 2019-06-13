import CoreAPI from '@/api/core'

import { DEFAULT_PARAMETERS } from '@/constants/async-calls'

export async function getDataFromURL (
  endpoint,
  additionalParams,
  method = 'GET',
  payload = null
) {
  const params = {
    ...(DEFAULT_PARAMETERS || {}),
    ...additionalParams
  }
  if (method === 'GET')
    return await CoreAPI[method.toLowerCase()](
      // eslint-disable-line
      endpoint,
      { params }
    )
  return await CoreAPI[method.toLowerCase()](
    // eslint-disable-line
    endpoint,
    payload,
    { params }
  )
}
