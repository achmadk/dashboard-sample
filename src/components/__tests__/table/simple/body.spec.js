import React from 'react'
import { shallow } from 'enzyme'

import { expect } from 'chai'

import SimpleTableBody from '@/components/table/simple/body'

describe('Table Body Component', () => {
  const props = {
    columns: [
      {
        name: 'sample_attribute',
        label: 'Sample Attribute',
        align: 'left'
      }
    ],
    items: [
      {
        sample_attribute: 'Hello'
      }
    ]
  }

  it('render correctly', () => {
    const wrapper = shallow(<SimpleTableBody {...props} />)
    expect(wrapper).to.exist
  })

  it('render correctly without columns props', () => {
    const wrapper = shallow(
      <SimpleTableBody columns={[null]} items={props.items} />
    )
    expect(wrapper).to.exist
  })

  it('render correctly with formatted currency', () => {
    const withCurrencyProps = {
      columns: [
        {
          name: 'sample_attribute',
          label: 'Sample Attribute',
          align: 'left',
          displayFormattedCurrency: true
        }
      ],
      items: [
        {
          sample_attribute: 100000
        }
      ]
    }
    const wrapper = shallow(<SimpleTableBody {...withCurrencyProps} />)
    expect(wrapper).to.exist
  })
})
