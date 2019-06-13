import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import chai from 'chai'

import HeaderContainer, { headerComponent } from '@/components/layouts/header'
import HeaderComponent from '@/components/layouts/header/header'
import ProviderStore from '@/../test/provider-store'

describe('header Layout Container', () => {
  it('render correctly', () => {
    const wrapper = shallow(<HeaderContainer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('return layout component successfully', () => {
    const result = headerComponent()
    chai.expect(result).to.exist
  })
})

describe('header Layout Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <ProviderStore>
        <HeaderComponent />
      </ProviderStore>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
