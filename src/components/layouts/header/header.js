import React, { createRef, PureComponent } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { Link } from 'react-router-dom'
import NavLeftList from './nav-left-list'
import NavRightList from './nav-right-list'

import { BRAND } from '@/constants/app-config'
import { LINK } from '@/constants/demo-data'

export class Header extends PureComponent {
  constructor (props) {
    super(props)
    this.sidebarBtn = createRef()
  }
  componentDidMount () {
    $(this.sidebarBtn.current).on('click', this.openSidebarMobile)
    // const sidebarBtn = this.sidebarBtn
    // const $sidebarToggler = $(sidebarBtn)
    // const $body = $('#body')

    // $sidebarToggler.on('click', (e) => {
    //   // _sidebar.scss, _page-container.scss
    //   $body.toggleClass('sidebar-mobile-open')
    // })
  }

  openSidebarMobile = () => {
    $('body').toggleClass('sidebar-mobile-open')
  }

  render () {
    // const { colorOption } = this.props
    return (
      <section className='app-header'>
        <div
          className={classnames('app-header-inner', {
            // 'bg-color-light': ['11', '12', '13', '14', '15', '16', '21'].indexOf(colorOption) >= 0,
            // 'bg-color-dark': colorOption === '31',
            // 'bg-color-primary': ['22', '32'].indexOf(colorOption) >= 0,
            // 'bg-color-success': ['23', '33'].indexOf(colorOption) >= 0,
            // 'bg-color-info': ['24', '34'].indexOf(colorOption) >= 0,
            // 'bg-color-warning': ['25', '35'].indexOf(colorOption) >= 0,
            // 'bg-color-danger': ['26', '36'].indexOf(colorOption) >= 0 })}
          })}
        >
          <div className='d-lg-none d-xl-none float-left'>
            <a
              href={LINK}
              className='header-icon toggle-sidebar-btn'
              ref={this.sidebarBtn}
            >
              <i className='material-icons' style={{ color: 'black' }}>
                menu
              </i>
            </a>
          </div>

          <div className='brand d-none d-lg-inline-block d-xl-inline-block'>
            <h2>
              <Link to='/'>{BRAND}</Link>
            </h2>
          </div>

          <div className='top-nav-left d-none d-lg-inline-block d-xl-inline-block'>
            <NavLeftList />
          </div>

          <div className='top-nav-right'>
            <NavRightList />
          </div>
        </div>
      </section>
    )
  }
}

// const mapStateToProps = state => ({
//   colorOption: state.settings.colorOption
// })

export default connect()(Header)
//   mapStateToProps
