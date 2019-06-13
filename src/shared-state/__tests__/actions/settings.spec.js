import { expect } from '@/../test/expect'
import { mockStore } from '@/../test/mock-store'

import { toggleNavCollapse } from '@/shared-state/actions/settings'

import { initialState } from '@/shared-state/reducers/settings'

describe('Settings redux action', () => {
  it('test', () => {
    const store = mockStore(initialState)
    const action = toggleNavCollapse(true)
    console.log('action: ', action)
    store.dispatch(action)
    const [expectedAction] = store.getActions()
    console.log('expected action: ', expectedAction)
    expect(expectedAction).is.eql(action)
  })
})
