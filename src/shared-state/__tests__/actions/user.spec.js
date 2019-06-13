import { expect } from '@/../test/expect'
import { mockStore } from '@/../test/mock-store'

import {
  doLogin,
  doLogout,
  getPrivilege,
  clearUser,
  LOGIN,
  LOGOUT,
  GET_PRIVILEGE,
  CLEAR_USER
} from '@/shared-state/actions/user'

import { initialState } from '@/shared-state/reducers/user'

var userData = null

describe('User redux action', () => {
  it('test doLogin', async () => {
    const store = mockStore(initialState)
    const action = doLogin({ login: 'superadmin', password: 'test1234' })
    await store.dispatch(action)
    const expectedActions = store.getActions()
    userData = expectedActions[1].payload.data.data
    expect(expectedActions[1].type).to.equal(`${LOGIN}_FULFILLED`)
    expect(expectedActions[1].payload.status).to.equal(201)
  })

  it('test getPrivilege with provided user data', async () => {
    const store = mockStore(initialState)
    const action = getPrivilege(userData)
    await store.dispatch(action)
    const expectedActions = store.getActions()
    expect(expectedActions[1].type).to.equal(`${GET_PRIVILEGE}_FULFILLED`)
    expect(expectedActions[1].payload).to.be.not.undefined
  })

  it('test doLogout', async () => {
    const store = mockStore(initialState)
    const action = doLogout(userData)
    await store.dispatch(action)
    const expectedActions = store.getActions()
    expect(expectedActions[1].type).to.equal(`${LOGOUT}_FULFILLED`)
    expect(expectedActions[1].payload.status).to.equal(200)
  })

  it('test clearUser', async () => {
    const store = mockStore(initialState)
    const action = clearUser(userData)
    await store.dispatch(action)
    const expectedActions = store.getActions()
  })

  it('test getPrivilege with user data is not exist', async () => {
    try {
      const store = mockStore(initialState)
      const action = getPrivilege()
      await store.dispatch(action)
      const expectedActions = store.getActions()
      expect(expectedActions[1].type).to.equal(`${GET_PRIVILEGE}_REJECTED`)
    } catch (error) {
      expect(error).to.be.not.undefined
    }
  })

  it('test getPrivilege with vendor data', async () => {
    jest.setTimeout(10000)
    try {
      const store = mockStore(initialState)
      const action1 = doLogin({
        login: '00000072',
        password: 'test1234'
      })
      await store.dispatch(action1)
      const expectedActions1 = store.getActions()
      const vendorData = expectedActions1[1].payload.data.data
      const action2 = getPrivilege(vendorData)
      await store.dispatch(action2)
      const expectedActions2 = store.getActions()
      console.log(expectedActions2)
      // expect(expectedActions[1].type).to.equal(`${LOGIN}_FULFILLED`)
      // expect(expectedActions[1].payload.status).to.equal(201)
    } catch (error) {
      expect(error).to.be.undefined
    }
  })
})
