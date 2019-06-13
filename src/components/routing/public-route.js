import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

import { getUserParams } from '@/shared-state/map-state-to-props/user'

export const mapStateToProps = ({ user }) => getUserParams(user)

export class PublicRoute extends PureComponent {
  renderProps = props => {
    const { isAuthenticated, component: Component, ...otherProps } = this.props
    console.log('otherProps: ', otherProps)
    console.log('props: ', props)
    const redirectToProps = {
      pathname: '/profile'
    }
    return isAuthenticated ? (
      <Redirect to={redirectToProps} />
    ) : (
      <Component {...props} />
    )
  }
  render () {
    const { component: Component, ...otherProps } = this.props
    return <Route {...otherProps} render={this.renderProps} />
  }
}

export default connect(mapStateToProps)(PublicRoute)
