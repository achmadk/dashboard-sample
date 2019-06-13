import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { loadPlotly, styles, ChartComponent } from '@/components/chart'

describe('Chart Component', () => {
  it('rendered successfully when loading props value is false', () => {
    const props = {
      loading: false,
      classes: styles()
    }
    const wrapper = shallow(<ChartComponent {...props} />)
    expect(wrapper).to.exist
  })

  it('rendered successfully when loading props value is true', () => {
    const props = {
      loading: true,
      classes: styles()
    }
    const wrapper = shallow(<ChartComponent {...props} />)
    expect(wrapper).to.exist
  })

  it('load plotly successfully', () => {
    const result = loadPlotly()
    expect(result).to.be.not.undefined
  })

  it('return userParams props value', () => {
    const style = styles()
    expect(style).to.be.not.undefined
  })
})
