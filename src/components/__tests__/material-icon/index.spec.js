import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import MaterialIconComponent from '@/components/material-icon'
import IconComponent from '@/components/material-icon/icon'

const props = {
  icon: 'home'
}

describe('Material Icon Component', () => {
  it('rendered successfully', () => {
    const wrapper = shallow(<MaterialIconComponent {...props} />)
    expect(wrapper).to.exist
  })
})

describe('Icon Component', () => {
  it('rendered successfully', () => {
    const wrapper = shallow(<IconComponent {...props} />)
    expect(wrapper).to.exist
  })
})
