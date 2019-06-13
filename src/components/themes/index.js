import darkTheme from './dark-theme'
import grayTheme from './gray-theme'
import lightTheme from './light-theme'

export const DARK_THEME = 'dark'

export const GRAY_THEME = 'gray'

export const LIGHT_THEME = 'light'

export default function useAppTheme (themeName = LIGHT_THEME) {
  switch (themeName) {
    case DARK_THEME:
      return darkTheme
    case GRAY_THEME:
      return grayTheme
    case LIGHT_THEME:
    default:
      return lightTheme
  }
}
