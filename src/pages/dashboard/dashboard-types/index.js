import React, { PureComponent } from 'react'

import { Route, Switch } from 'react-router-dom'
import DashboardEntries from './dashboard-entries'

import dashboardContents from '@/constants/dashboard-contents'

class DashboardTypesComponent extends PureComponent {
  renderRouteComponent () {
    return dashboardContents.map(({ to: path }, index) => (
      <Route
        key={`dashboard-${path}-${index}`}
        path={path}
        component={DashboardEntries}
      />
    ))
  }
  render () {
    return (
      <section className='container-fluid container-mw-xl chapter'>
        <article className='article'>
          <Switch>{this.renderRouteComponent()}</Switch>
        </article>
      </section>
    )
  }
}

export default DashboardTypesComponent
