import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import ScrollToTopComponent from '@/components/scroll-to-top'

describe('Scroll to Top Component', () => {
  it('rendered successfully', () => {
    const wrapper = shallow(<ScrollToTopComponent>Hello</ScrollToTopComponent>)
    expect(wrapper).to.exist
  })
})
