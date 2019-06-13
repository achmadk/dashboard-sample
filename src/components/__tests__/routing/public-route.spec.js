import React from 'react'
import { shallow } from 'enzyme'
import { expect } from '../../../../test/expect'

import { PublicRoute, mapStateToProps } from '@/components/routing/public-route'

describe('Public Route Component', () => {
  const props = {
    component: 'div',
    isAuthenticated: true,
    enqueueSnackbar: jest.fn((...args) => jest.fn(...args)),
    dispatch: jest.fn()
  }

  it('render correctly', () => {
    const wrapper = shallow(<PublicRoute {...props} />)
    expect(wrapper).to.exist
  })

  it('get userParams and isAuthenticated props', () => {
    const store = {
      user: {
        data: {
          username: 'halo',
          authn_token: 'helo too'
        }
      }
    }
    const result = mapStateToProps(store)
    expect(result.userParams).to.eql(store.user.data)
    expect(result.isAuthenticated).to.be.true
  })

  it('call renderProps correctly when isAuthenticated is true', () => {
    const wrapper = shallow(<PublicRoute {...props} />)
    const params = { location: '/somewhere' }
    expect(wrapper.instance().renderProps(params)).to.exist
  })

  it('call renderProps correctly when isAuthenticated is false', () => {
    const props = {
      component: 'span',
      isAuthenticated: false
    }
    const wrapper = shallow(<PublicRoute {...props} />)
    const params = { location: '/somewhere' }
    expect(wrapper.instance().renderProps(params)).to.exist
  })
})
