import CoreAPI from '@/api/core'

export const LOGIN = 'LOGIN'

export function doLogin (formData) {
  return {
    type: LOGIN,
    async payload () {
      return await CoreAPI.post('/login', { data: formData }) // eslint-disable-line
    }
  }
}

export const LOGOUT = 'LOGOUT'

export function doLogout (userData) {
  return {
    type: LOGOUT,
    async payload () {
      return await CoreAPI.post('/logout', { data: userData }) // eslint-disable-line
    }
  }
}

export const CLEAR_USER = 'CLEAR_USER'

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}

export const GET_PRIVILEGE = 'GET_PRIVILEGE'

export function getPrivilege (params) {
  return {
    type: GET_PRIVILEGE,
    payload () {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await CoreAPI.get('/privilege', { params })
          const { roles } = data.lookup
          const isVendor =
            roles.length === 1 &&
            roles.reduce(
              (acc, { ident_name: identName }) => acc || identName === 'VENDOR',
              false
            )
          if (isVendor) {
            const {
              notAuthorizedResponse
            } = import(/* webpackChunkName: "async-calls-error-handling", webpackPreload: true */
            '@/utils/error-handling/async-calls')
            reject(notAuthorizedResponse)
          }
          const roleData = roles
            .map(({ ident_name: identName }) => identName)
            .join(',')
          resolve(roleData)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
