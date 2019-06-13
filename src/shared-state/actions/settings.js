export const CHANGE_THEME = 'CHANGE_THEME'

export const changeTheme = themeName => ({
  type: CHANGE_THEME,
  payload: themeName
})

export const TOGGLE_NAV_COLLAPSE = 'TOGGLE_NAV_COLLAPSE'

export const toggleNavCollapse = value => ({
  type: TOGGLE_NAV_COLLAPSE,
  payload: value
})
