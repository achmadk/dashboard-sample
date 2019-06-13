import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import chai from 'chai'

import PublicPageAsyncContainer, { publicComponent } from '@/pages/public'
import PublicPageContainer from '@/pages/public/public'

describe('Public Page Async Container', () => {
  it('render correctly', () => {
    const wrapper = shallow(<PublicPageAsyncContainer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('return public component successfully', () => {
    const result = publicComponent()
    chai.expect(result).to.exist
  })
})

describe('Public Page Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<PublicPageContainer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
