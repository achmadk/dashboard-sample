import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import chai from 'chai'

import SidenavContainer, {
  sidenavComponent
} from '@/components/layouts/sidenav'
import SidenavComponent from '@/components/layouts/sidenav/sidenav'
import ProviderStore from '@/../test/provider-store'

const props = {
  enqueueSnackbar: jest.fn()
}

describe('sidenav Layout Container', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <ProviderStore>
        <SidenavContainer {...props} />
      </ProviderStore>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('return layout component successfully', () => {
    const result = sidenavComponent()
    chai.expect(result).to.exist
  })
})

describe('sidenav Layout Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <ProviderStore>
        <SidenavComponent {...props} />
      </ProviderStore>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
