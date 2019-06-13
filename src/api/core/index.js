import { create } from 'axios'

import { BACKEND_URL } from '@/constants/app-config'

const CoreAPI = create({
  baseURL: `${BACKEND_URL}/api`
})

export default CoreAPI

export function generateAuthHeader (params) {
  return {
    headers: {
      'X-Username': params?.username || null,
      'X-User-Token': params?.authn_token || null
    }
  }
}
