import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import chai from 'chai'

import AverageTenderDurationAsyncContainer, {
  loadDashboardEntries
} from '@/pages/dashboard/dashboard-types/dashboard-entries'
import AverageTenderDurationContainer from '@/pages/dashboard/dashboard-types/dashboard-entries/dashboard-entries'
import ProviderStore from '@/../test/provider-store'

describe('Dashboard Entries Container', () => {
  it('render correctly', () => {
    const wrapper = shallow(<AverageTenderDurationAsyncContainer />)
    expect(toJson(wrapper, { mode: 'deep' })).toMatchSnapshot()
  })

  it('return Dashboard component successfully', () => {
    const result = loadDashboardEntries()
    chai.expect(result).to.exist
  })
})

describe('Dashboard Entries Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <ProviderStore>
        <AverageTenderDurationContainer />
      </ProviderStore>
    )
    expect(toJson(wrapper, { mode: 'deep' })).toMatchSnapshot()
  })
})
