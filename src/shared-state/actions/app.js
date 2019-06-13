export const SET_INCOMING_PATH_PARAMS = 'SET_INCOMING_PATH_PARAMS'

export function setIncomingPathParams (pathParams) {
  return {
    type: SET_INCOMING_PATH_PARAMS,
    payload: pathParams
  }
}
