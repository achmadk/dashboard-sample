import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import chai from 'chai'

import {
  loadTableContent,
  SimpleTable,
  styles
} from '@/components/table/simple'

describe('Simple Table Component', () => {
  it('render correctly with loading props value is true', () => {
    const wrapper = shallow(<SimpleTable classes={styles()} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('render correctly with loading props value is false', () => {
    const wrapper = shallow(<SimpleTable classes={styles()} loading={false} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('return Table Content component successfully', () => {
    const result = loadTableContent()
    chai.expect(result).to.exist
  })

  it('return style successfully', () => {
    const result = styles()
    chai.expect(result).to.exist
  })
})
