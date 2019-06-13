import { expect } from '@/../test/expect'

import userReducer, { initialState } from '@/shared-state/reducers/user'

import { LOGIN, LOGOUT, CLEAR_USER } from '@/shared-state/actions/user'

describe('User Reducers', () => {
  it('has initialState with data is null', () => {
    expect(initialState.data).to.be.null
  })

  it('has data if login', () => {
    const payload = {
      data: {
        data: {
          username: 'hi',
          authn_token: 'hello'
        }
      }
    }
    const newState = userReducer(undefined, {
      type: `${LOGIN}_FULFILLED`,
      payload
    })
    console.log(newState)
    expect(newState.data).to.eql(payload.data.data)
  })

  it('has data same as initialState if Logged out successfully', () => {
    const newState = userReducer(undefined, {
      type: `${LOGOUT}_FULFILLED`
    })
    expect(newState.data).to.be.null
  })

  it('has data same as initialState if Logged out with error', () => {
    const newState = userReducer(undefined, {
      type: `${LOGOUT}_REJECTED`
    })
    expect(newState.data).to.be.null
  })

  it('has data same as initialState if app clear user data', () => {
    const newState = userReducer(undefined, {
      type: CLEAR_USER
    })
    expect(newState.data).to.be.null
  })
})
