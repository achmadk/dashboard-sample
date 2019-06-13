import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import chai from 'chai'

import {
  DashboardEntries,
  mapStateToProps
} from '@/pages/dashboard/dashboard-types/dashboard-entries/dashboard-entries'

describe('Dashboard Entries Component', () => {
  it('render correctly', () => {
    const props = {
      match: {
        url: '/dashboard/average_tender_duration'
      }
    }
    const wrapper = shallow(<DashboardEntries {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('render correctly without matching URL from dashboard-contents', () => {
    const props = {
      match: {
        url: '/dashboard/average_tender_durations'
      }
    }
    const wrapper = shallow(<DashboardEntries {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('return userParams value', () => {
    const state = {
      user: {
        data: {
          username: 'chack',
          authn_token: 'check'
        }
      }
    }
    const result = mapStateToProps(state)
    chai.expect(result).to.be.not.undefined
  })
})
