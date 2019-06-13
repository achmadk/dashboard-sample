import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withSnackbar } from 'notistack'

import { withRouter } from 'react-router-dom'

import { getUserParams } from '@/shared-state/map-state-to-props/user'
import { sendErrorMessage } from '@/utils/error-handling/async-calls'

export const mapStateToProps = ({ user }) => getUserParams(user)

export class ProtectedRoute extends PureComponent {
  state = {
    isAuthorized: true
  }
  async componentDidMount () {
    const {
      dispatch,
      userParams,
      history,
      enqueueSnackbar,
      computedMatch
    } = this.props
    const [
      { getPrivilege, clearUser },
      { setIncomingPathParams },
      { Route, Redirect }
    ] = await Promise.all([
      import(/* webpackChunkName: "user-actions", webpackPreload: true */
      '@/shared-state/actions/user' /* webpackChunkName: "app-actions", webpackPrefetch: true */),
      import('@/shared-state/actions/app'),
      import('react-router-dom')
    ])
    computedMatch?.params &&
      dispatch(setIncomingPathParams(computedMatch?.params))
    try {
      await dispatch(getPrivilege(userParams))
      this.setState({
        components: {
          Route,
          Redirect
        }
      })
    } catch (error) {
      const message = sendErrorMessage(error)
      enqueueSnackbar(message, { variant: 'error' })
      this.setState({ isAuthorized: false })
      dispatch(clearUser())
      console.log(history)
      history.replace('/')
    }
  }
  renderProps = props => {
    const { Redirect } = this.state.components || { Redirect: false }
    const { isAuthenticated, component: Component } = this.props
    const redirectToProps = {
      pathname: '/',
      state: {
        from: props.location
      }
    }
    return isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={redirectToProps} />
    )
  }
  render () {
    const { isAuthorized, components } = this.state
    const { component: Component, ...otherProps } = this.props
    if (components) {
      const { Redirect, Route } = components || {
        Redirect: false,
        Route: false
      }
      if (!isAuthorized) return <Redirect to='/' />
      return <Route {...otherProps} render={this.renderProps} />
    }
    return false
  }
}

export default compose(
  connect(mapStateToProps),
  withRouter,
  withSnackbar
)(ProtectedRoute)

export async function loadProtectedRoute () {
  const [
    { compose },
    { connect },
    { withRouter },
    { withSnackbar }
  ] = await Promise.all([
    import('redux'),
    import('react-redux'),
    import('react-router-dom'),
    import('notistack')
  ])
  return compose(
    connect(mapStateToProps),
    withRouter,
    withSnackbar
  )(ProtectedRoute)
}
