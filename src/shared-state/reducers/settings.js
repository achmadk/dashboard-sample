import {
  CHANGE_THEME,
  TOGGLE_NAV_COLLAPSE
} from '@/shared-state/actions/settings'

export const initialState = {
  theme: 'light',
  navCollapsed: true,
  fixedHeader: true
}

export default function settingsReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      }
    case TOGGLE_NAV_COLLAPSE:
      return {
        ...state,
        navCollapsed: action.payload
      }
    default:
      return state
  }
}
