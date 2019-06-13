import React from 'react'
import { shallow } from 'enzyme'

import { expect } from 'chai'

import DashboardTypesComponent from '@/pages/dashboard/dashboard-types'

describe('Dashboard Types Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<DashboardTypesComponent />)
    expect(wrapper).to.exist
  })
})
