import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MaterialIcon from '@/components/material-icon'

import { getUserParams } from '@/shared-state/map-state-to-props/user'

import { USER } from '@/constants/demo-data'

// import avatarImage from '@/assets/images-demo/g1.jpg'

const avatarImage = require('@/assets/images-demo/g1.jpg')

class NavRightList extends PureComponent {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    // console.log( event)
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  onLogutButtonClicked = async () => {
    const { dispatch, userParams } = this.props
    try {
      const {
        doLogout
      } = await import(/* webpackPrefetch: true, webpackChunkName: "do-logout" */
      '@/shared-state/actions/user')
      await dispatch(doLogout(userParams))
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { anchorEl } = this.state

    return (
      <ul className='list-unstyled float-right'>
        <li className='list-inline-item search-box seach-box-right d-none d-md-inline-block'>
          <div className='search-box-inner'>
            <div className='search-box-icon'>
              <MaterialIcon icon='search' />
            </div>
            <input type='text' placeholder='search...' />
            <span className='input-bar' />
          </div>
        </li>
        <li style={{ marginRight: '10px' }}>
          <IconButton
            className='header-btn'
            aria-owns={anchorEl ? 'app-header-menu' : null}
            aria-haspopup='true'
            onClick={this.handleClick}
          >
            <Avatar
              alt='avatar'
              src={avatarImage}
              className='rounded-circle header-avatar'
            />
          </IconButton>

          <Menu
            id='app-header-menu'
            className='app-header-dropdown'
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              {' '}
              <div>
                <span>Signed in as</span>
                <strong>{USER}</strong>
              </div>{' '}
            </MenuItem>
            <div className='divider divider-solid my-1' />
            <MenuItem onClick={this.handleClose}>
              {' '}
              <a href='#/app/dashboard'>
                {' '}
                <i className='material-icons'>
                  home
                </i> <span>Dashboard</span>{' '}
              </a>{' '}
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              {' '}
              <a href='#/app/page/about'>
                {' '}
                <i className='material-icons'>person</i> <span>About</span>{' '}
              </a>{' '}
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              {' '}
              <a href='#/app/page/services'>
                {' '}
                <i className='material-icons'>help</i> <span>Need Help?</span>{' '}
              </a>{' '}
            </MenuItem>
            <div className='divider divider-solid my-1' />
            <MenuItem onClick={this.onLogutButtonClicked}>
              {' '}
              <a>
                {' '}
                <i className='material-icons'>forward</i> <span>Log Out</span>{' '}
              </a>{' '}
            </MenuItem>
          </Menu>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = ({ user }) => getUserParams(user)

export default compose(
  connect(mapStateToProps),
  withRouter
)(NavRightList)
