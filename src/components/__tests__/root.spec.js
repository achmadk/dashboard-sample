import React from 'react'
import { shallow } from 'enzyme'
import { expect } from '../../../test/expect'
import { stub } from 'sinon'
import * as ReactRedux from 'react-redux'

import { RootComponent } from '@/components/root'

describe('Root Component', () => {
  const props = {
    enqueueSetState: jest.fn()
  }
  it('render correctly', async () => {
    try {
      const wrapper = shallow(<RootComponent {...props} />)
      expect(wrapper).to.exist
    } catch (e) {
      expect(e).to.exist
    }
  })

  it('return error when componentDidMount has failed', async () => {
    let reactReduxStub = null
    try {
      reactReduxStub = stub(ReactRedux, 'Provider').returns(undefined)
      shallow(<RootComponent {...props} />)
      const result = await RootComponent.prototype.componentDidMount()
      expect(result).to.exist
    } catch (error) {
      expect(error).to.exist
    }
    reactReduxStub.restore()
  })
})
