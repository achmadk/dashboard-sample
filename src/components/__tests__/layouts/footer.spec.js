import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import chai from 'chai'

import FooterContainer, { footerComponent } from '@/components/layouts/footer'
import FooterComponent from '@/components/layouts/footer/footer'

describe('Footer Layout Container', () => {
  it('render correctly', () => {
    const wrapper = shallow(<FooterContainer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('return layout component successfully', () => {
    const result = footerComponent()
    chai.expect(result).to.exist
  })
})

describe('Footer Layout Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<FooterComponent />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
