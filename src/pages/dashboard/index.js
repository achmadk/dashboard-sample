import React, { PureComponent, lazy, Suspense } from 'react'
import { connect } from 'react-redux'

export const dashboardComponent = () =>
  import(/* webpackChunkName: "dashboard" */ './dashboard')

const DashboardPage = lazy(dashboardComponent)

class DashboardPageContainer extends PureComponent {
  async componentDidMount () {
    const { dispatch, match } = this.props
    try {
      const {
        setIncomingPathParams
      } = await import(/* webpackChunkName: "app-actions", webpackPrefetch: true */
      '@/shared-state/actions/app')
      dispatch(setIncomingPathParams(match?.params || {}))
    } catch (error) {}
  }
  render () {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardPage />
      </Suspense>
    )
  }
}

export default connect()(DashboardPageContainer)
