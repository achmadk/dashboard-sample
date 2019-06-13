import React from 'react'
import { shallow } from 'enzyme'

import { expect } from 'chai'

import LoginPageAsyncContainer, { loginComponent } from '@/pages/login'
import LoginPageContainer from '@/pages/login/login'

describe('Login Page Async Container', () => {
  it('render correctly', () => {
    const wrapper = shallow(<LoginPageAsyncContainer />)
    expect(wrapper).to.exist
  })

  it('return Login component successfully', () => {
    const result = loginComponent()
    expect(result).to.exist
  })
})

describe('Login Page Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<LoginPageContainer />)
    expect(wrapper).to.exist
  })
})
