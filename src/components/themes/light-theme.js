import { createMuiTheme } from '@material-ui/core/styles'
import { cyan, green } from '@material-ui/core/colors'

export const lightThemeConfigs = {
  typography: {
    useNextVariants: true
  },
  palette: {
    type: 'light',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: cyan[500],
      dark: cyan[700],
      contrastText: '#fff'
    },
    secondary: {
      main: green[400],
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#fff'
    }
    // error: will use the default color
  }
}

const theme = createMuiTheme(lightThemeConfigs)

export default theme
