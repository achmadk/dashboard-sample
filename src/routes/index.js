import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { BrowserRouter, Switch } from 'react-router-dom'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import ProtectedRoute from '@/components/routing/protected-route'
import PublicRoute from '@/components/routing/public-route'

import Login from '@/pages/login'
// import Public from '@/pages/public'
// import Profile from '@/pages/profile'
import Dashboard from '@/pages/dashboard'

import useAppTheme, { GRAY_THEME, DARK_THEME } from '@/components/themes'

export class RouteComponents extends PureComponent {
  state = {
    appMainClassNames: 'app-main h-100'
  }

  async componentDidUpdate (prevProps) {
    if (this.props.theme !== prevProps.theme) {
      await this.updateTheme()
    }
  }

  updateTheme = async () => {
    try {
      const { theme, dispatch } = this.props
      const {
        changeTheme
      } = await import(/* webpackChunkName: "action-change-theme", webpackPrefetch: true */
      '@/shared-state/actions/settings')
      dispatch(changeTheme(theme))
    } catch (error) {
      console.log(error)
    }
  }

  appMainClassNames () {
    const { theme, navCollapsed, fixedHeader } = this.props
    return classnames('app-main h-100', {
      'fixed-header': fixedHeader,
      'nav-collapsed': navCollapsed,
      // 'nav-behind': navBehind,
      // 'layout-boxed': layoutBoxed,
      'theme-gray': theme === GRAY_THEME,
      'theme-dark': theme === DARK_THEME
      // 'sidebar-sm': sidebarWidth === 'small',
      // 'sidebar-lg': sidebarWidth === 'large'
    })
  }

  render () {
    const { theme } = this.props
    const appTheme = useAppTheme(theme)
    const appMainClassNames = this.appMainClassNames()
    return (
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <div id='app-inner'>
            <div className='preloaderbar hide'>
              <span className='bar' />
            </div>
            <div className={appMainClassNames}>
              <Switch>
                <PublicRoute path='/' exact component={Login} />
                <ProtectedRoute path='/profile' component={Dashboard} />
                <ProtectedRoute path='/vendors' component={Dashboard} />
                <ProtectedRoute
                  path='/purchase_requisition_items'
                  component={Dashboard}
                />
                <ProtectedRoute path='/procurements' component={Dashboard} />
                <ProtectedRoute path='/auctions' component={Dashboard} />
                <ProtectedRoute path='/dashboard' exact component={Dashboard} />
                <ProtectedRoute
                  path='/dashboard/:type/:title'
                  component={Dashboard}
                />
                <ProtectedRoute path='/dashboard/:type' component={Dashboard} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export const mapStateToProps = ({ settings }) => ({ ...settings })

export default connect(mapStateToProps)(RouteComponents)
