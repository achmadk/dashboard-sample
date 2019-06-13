import { SET_INCOMING_PATH_PARAMS } from '@/shared-state/actions/app'
import { LOGOUT, CLEAR_USER } from '@/shared-state/actions/user'

export const initialState = {
  pathParams: null
}

export default function appReducer (state = initialState, action) {
  switch (action.type) {
    case SET_INCOMING_PATH_PARAMS:
      return {
        ...state,
        pathParams: action.payload
      }
    case `${LOGOUT}_FULFILLED`:
    case `${LOGOUT}_REJECTED`:
    case CLEAR_USER:
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}
