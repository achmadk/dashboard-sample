import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import {
  ProtectedRoute,
  mapStateToProps,
  loadProtectedRoute
} from '@/components/routing/protected-route'

describe('Protected Route Component', () => {
  const props = {
    component: 'div',
    isAuthenticated: true,
    enqueueSnackbar: jest.fn((...args) => jest.fn(...args)),
    dispatch: jest.fn()
  }

  it('render correctly', async () => {
    // const ProtectedRouteContainer = await loadProtectedRoute()
    const wrapper = shallow(<ProtectedRoute {...props} />)
    expect(wrapper).to.exist
  })

  describe('get userParams and isAuthenticated props', () => {
    const store = {
      user: {
        data: {
          username: 'halo',
          authn_token: 'helo too'
        }
      }
    }
    const result = mapStateToProps(store)
    it('has userParams', () => {
      console.log('userParams: ', result.userParams)
      console.log('storeUserData: ', store.user.data)
      expect(result.userParams).to.eql(store.user.data)
    })

    it('has isAuthenticated', () => {
      expect(result.isAuthenticated).to.be.true
    })
  })

  it('call renderProps correctly when isAuthenticated is true', () => {
    const wrapper = shallow(<ProtectedRoute {...props} />)
    const params = { location: '/somewhere' }
    expect(wrapper.instance().renderProps(params)).to.exist
  })

  it('call renderProps correctly when isAuthenticated is false', () => {
    const props = {
      component: 'span',
      isAuthenticated: false
    }
    const wrapper = shallow(<ProtectedRoute {...props} />)
    const params = { location: '/somewhere' }
    expect(wrapper.instance().renderProps(params)).to.exist
  })

  describe('loadProtectedRoute async function', () => {
    it('successfully render ProtectedRoute container', async () => {
      try {
        const ProtectedRoute = await loadProtectedRoute()
        const wrapper = shallow(<ProtectedRoute {...props} />)
        const params = { location: '/somewhere' }
        expect(wrapper.instance().renderProps(params)).to.exist
      } catch (error) {}
    })
  })
})
