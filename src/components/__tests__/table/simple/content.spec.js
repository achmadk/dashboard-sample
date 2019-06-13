import React from 'react'
import { shallow } from 'enzyme'

import { expect } from 'chai'

import SimpleTableContent from '@/components/table/simple/content'
import { styles } from '@/components/table/simple'

describe('Simple Table Content Component', () => {
  const sharedProps = {
    classes: styles(),
    items: [
      {
        sample_attribute: 'Hello'
      }
    ],
    title: 'Sample Table',
    loading: true,
    columns: [
      {
        name: 'sample_attribute',
        label: 'Sample Attribute',
        align: 'left'
      }
    ]
  }

  it('rendered successfully with loading props is true', () => {
    const props = { ...sharedProps, loading: true }
    const wrapper = shallow(<SimpleTableContent {...props} />)
    expect(wrapper).to.exist
  })

  it('rendered successfully with loading props is false', () => {
    const props = { ...sharedProps, loading: false }
    const wrapper = shallow(<SimpleTableContent {...props} />)
    expect(wrapper).to.exist
  })
})
