import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import chai from 'chai'

import DashboardPageAsyncContainer, {
  dashboardComponent
} from '@/pages/dashboard'
import DashboardPageContainer from '@/pages/dashboard/dashboard'
import ProviderStore from '@/../test/provider-store'

describe('Dashboard Page Async Container', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <ProviderStore>
        <DashboardPageAsyncContainer />
      </ProviderStore>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('return Dashboard component successfully', () => {
    const result = dashboardComponent()
    chai.expect(result).to.exist
  })
})

describe('Dashboard Page Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<DashboardPageContainer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
