import { createMuiTheme } from '@material-ui/core/styles'
import { cyan, green } from '@material-ui/core/colors'

export const darkThemeConfigs = {
  typography: {
    useNextVariants: true
  },
  palette: {
    type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: cyan[700],
      contrastText: 'rgba(255,255,255,.7)'
    },
    secondary: {
      main: green[600],
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'rgba(255,255,255,.7)'
    }
    // error: will use the default color
  }
}

const theme = createMuiTheme(darkThemeConfigs)

export default theme
