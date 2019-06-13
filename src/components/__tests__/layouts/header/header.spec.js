import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import chai from 'chai'

import { Header } from '@/components/layouts/header/header'

describe('header Layout Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('call openSidebarMobile method correctly', () => {
    const wrapper = shallow(<Header />)
    const result = wrapper.instance().openSidebarMobile()
    chai.expect(result).to.be.undefined
  })
})
