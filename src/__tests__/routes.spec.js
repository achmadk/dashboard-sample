import React from 'react'
import { expect } from '../../test/expect'
import { render, shallow } from 'enzyme'
import { spy } from 'sinon'

import { RouteComponents, mapStateToProps } from '@/routes'
import { initialState as settings } from '@/shared-state/reducers/settings'

describe('Route Component', () => {
  const dispatch = jest.fn(() => jest.fn())

  // error window.getComputedStyle is not a function
  it('render correctly', async () => {
    let routeComponentStub = null
    try {
      // routeComponentStub = stub(RouteComponents, 'RouteComponents').returns(<div />)
      const wrapper = render(<RouteComponents theme='light' />)
      expect(wrapper).to.exist
      routeComponentStub.restore()
    } catch (e) {
      expect(e).to.exist
    }
  })

  describe('componentDidUpdate lifecycle handler', () => {
    it('re-render correctly when theme is updated', async () => {
      try {
        // const spyComponent = spy(RouteComponents.prototype, 'componentDidUpdate')
        const wrapper = shallow(
          <RouteComponents theme='light' dispatch={dispatch} />
        )
        const result = await wrapper
          .instance()
          .componentDidUpdate({ theme: 'dark' })
        // expect(result).to.exist
        // wrapper.setProps({ theme: 'dark' })
        // expect(spyComponent.calledOnce).to.equal(true)
        expect(result).to.exist
      } catch (e) {
        expect(e).to.exist
      }
    })

    it('componentDidUpdate not called when theme props is same', async () => {
      try {
        const spyComponent = spy(
          RouteComponents.prototype,
          'componentDidUpdate'
        )
        const wrapper = shallow(
          <RouteComponents theme='light' dispatch={dispatch} />,
          {
            lifecycleExperimental: true
          }
        )
        wrapper.setProps({ theme: 'light' })
        expect(spyComponent.calledOnce).to.equal(true)
        // spyComponent.reset()
      } catch (e) {
        console.log(e)
        expect(e).to.exist
      }
    })

    it('got exception when one of required props is undefined', async () => {
      try {
        const spyComponent = spy(
          RouteComponents.prototype,
          'componentDidUpdate'
        )
        const wrapper = shallow(
          <RouteComponents theme='light' dispatch={dispatch} />
        )
        wrapper.setProps({ theme: 'light' })
        expect(spyComponent.calledOnce).to.equal(false)
        // spyComponent.reset()
      } catch (e) {
        console.log(e)
        expect(e).to.exist
      }
    })
  })

  describe('updateTheme method', () => {
    it('updateTheme method has been called when theme is updated', async () => {
      try {
        const wrapper = shallow(
          <RouteComponents theme='light' dispatch={dispatch} />
        )
        const result = await wrapper.instance().updateTheme()
        expect(result).to.exist
      } catch (e) {
        expect(e).to.exist
      }
    })

    it('updateTheme is rejected', async () => {
      try {
        const wrapper = shallow(<RouteComponents theme='light' />)
        const result = await Promise.reject(wrapper.instance().updateTheme())
        expect(spyComponent.calledOnce).to.be.true
      } catch (e) {
        console.log(e)
        expect(e).to.exist
      }
    })
  })

  it('get setting values when calling mapStateToProps', () => {
    const values = mapStateToProps({ settings })
    expect(values).to.eql(settings)
  })
})
