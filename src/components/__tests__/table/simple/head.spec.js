import React from 'react'
import { shallow } from 'enzyme'

import { expect } from 'chai'

import SimpleTableHead from '@/components/table/simple/head'

describe('Table Head Component', () => {
  const props = {
    columns: [
      {
        name: 'sample_attribute',
        label: 'Sample Attribute',
        align: 'left'
      }
    ]
  }
  it('render correctly', () => {
    const wrapper = shallow(<SimpleTableHead {...props} />)
    expect(wrapper).to.exist
  })
})
