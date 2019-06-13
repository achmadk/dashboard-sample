import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import chai from 'chai'

import ProfilePageAsyncContainer, { profileComponent } from '@/pages/profile'
import ProfilePageContainer from '@/pages/profile/profile'

const props = {
  enqueueSnackbar: jest.fn()
}

describe('Profile Page Async Container', () => {
  it('render correctly', () => {
    const wrapper = shallow(<ProfilePageAsyncContainer {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('return profile component successfully', () => {
    const result = profileComponent()
    chai.expect(result).to.exist
  })
})

describe('Profile Page Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<ProfilePageContainer {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
