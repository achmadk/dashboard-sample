import { expect } from '@/../test/expect'

import settingsReducer, { initialState } from '@/shared-state/reducers/settings'

import {
  CHANGE_THEME,
  TOGGLE_NAV_COLLAPSE
} from '@/shared-state/actions/settings'

describe('User Reducers', () => {
  it('has initialState value', () => {
    expect(initialState).to.be.not.undefined
  })

  it('can set theme value to dark', () => {
    const payload = 'dark'
    const newState = settingsReducer(undefined, {
      type: CHANGE_THEME,
      payload
    })
    expect(newState.theme).to.equal(payload)
  })

  it('can set nav collapse value to false', () => {
    const newState = settingsReducer(undefined, {
      type: TOGGLE_NAV_COLLAPSE,
      payload: false
    })
    expect(newState.navCollapsed).to.be.false
  })
})
