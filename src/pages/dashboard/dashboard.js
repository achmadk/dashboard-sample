import React, { PureComponent } from 'react'

import Sidenav from '@/components/layouts/sidenav'
import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'
import DashboardTypes from './dashboard-types'

export default class DashboardPageContainer extends PureComponent {
  render () {
    return (
      <div className='main-app-container'>
        <Sidenav />

        <section id='page-container' className='app-page-container'>
          <Header />

          <div className='app-content-wrapper'>
            <div className='app-content'>
              <div className='h-100'>
                <DashboardTypes />
              </div>
            </div>

            <Footer />
          </div>
        </section>

        {/* <Customizer /> */}
      </div>
    )
  }
}
