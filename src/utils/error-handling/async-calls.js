export const CANNOT_CONNECT_SERVER_MESSAGE =
  'Cannot connect to server. Please check your internet connection.'
export const GENERIC_ERROR_MESSAGE = 'Error happenned, please try again.'
export const NOT_AUTHORIZED_ERROR_MESSAGE = 'You are not authorized'
export const BAD_GATEWAY_ERROR_MESSAGE = 'Bad Gateway'

export function sendErrorMessage (error) {
  let { response } = error
  if (response?.status === 401) {
    return NOT_AUTHORIZED_ERROR_MESSAGE
  }
  if (response?.status === 502) {
    return BAD_GATEWAY_ERROR_MESSAGE
  }
  if (response?.data?.error) {
    return response?.data?.error?.message || GENERIC_ERROR_MESSAGE
  }
  return CANNOT_CONNECT_SERVER_MESSAGE
}

export const notAuthorizedResponse = {
  response: {
    status: 401,
    data: {
      error: {
        message: NOT_AUTHORIZED_ERROR_MESSAGE
      }
    }
  }
}
