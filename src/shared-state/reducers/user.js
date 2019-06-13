import { LOGIN, LOGOUT, CLEAR_USER } from '@/shared-state/actions/user'

export const initialState = {
  data: null
}

export default function userReducers (state = initialState, action) {
  switch (action.type) {
    case `${LOGIN}_FULFILLED`:
      const { data } = action.payload.data
      return {
        ...state,
        data
      }
    case `${LOGOUT}_FULFILLED`:
    case `${LOGOUT}_REJECTED`:
    case CLEAR_USER:
      return {
        ...state,
        ...initialState
      }
  }
  return state
}
