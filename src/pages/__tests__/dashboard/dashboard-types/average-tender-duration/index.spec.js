import React from 'react'
import { Provider } from 'react-redux'

import { shallow } from 'enzyme'
import { expect } from '@/../test/expect'

import AverageTenderDurationContainer, {
  averageTenderDurationComponent
} from '@/pages/dashboard/dashboard-types/average-tender-duration'
import {
  AverageTenderDurationComponent,
  mapStateToProps
} from '@/pages/dashboard/dashboard-types/average-tender-duration/average-tender-duration'

import { store } from '@/shared-state/store'

describe('Average Tender Duration Container', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AverageTenderDurationContainer />
      </Provider>
    )
    expect(wrapper).to.exist
  })

  it('return Dashboard component successfully', () => {
    const result = averageTenderDurationComponent()
    expect(result).to.exist
  })
})

describe('Average Tender Duration Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<AverageTenderDurationComponent />)
    expect(wrapper).to.exist
  })

  it('Generate userParams props', () => {
    const store = {
      user: {
        data: {
          username: 'test-username',
          authn_token: 'test-token'
        }
      }
    }
    const result = mapStateToProps(store)
    expect(result.userParams).to.eql(store.user.data)
  })
})
