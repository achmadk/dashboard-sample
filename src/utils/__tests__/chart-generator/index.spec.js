import { expect } from '@/../test/expect'

import {
  defaultChartProps,
  generateChartProps,
  generateLayoutProps,
  LINE,
  PIE,
  TABLE
} from '@/utils/chart-generator-canvasjs'

describe('Chart Generator Utilities', () => {
  it('successfully call generateChartProps with display type "line" and items data type is array', () => {
    const reactStates = {
      responses: [
        {
          displays: [
            {
              type: LINE,
              yAttribute: 'sample_attribute'
            }
          ],
          items: [
            {
              sample_attribute: 'sample_value'
            }
          ]
        }
      ],
      loading: false
    }
    const result = generateChartProps(reactStates)
    console.log('result chart generator: ', result)
    expect(result).to.be.not.undefined

    const componentResult = result[0][0].component({})
    expect(componentResult).to.be.not.undefined
  })

  it('successfully call generateChartProps with display type "line" and items data type is object', () => {
    const reactStates = {
      responses: [
        {
          displays: [
            {
              type: LINE,
              yAttribute: 'sample_attribute'
            }
          ],
          items: {
            '2019': [
              {
                sample_attribute: 'sample_value'
              }
            ],
            '2018': [
              {
                sample_attribute: 'sample_value'
              }
            ]
          }
        }
      ],
      loading: false
    }
    const result = generateChartProps(reactStates)
    console.log('result chart generator: ', result)
    expect(result).to.be.not.undefined

    const componentResult = result[0][0]({})
    expect(componentResult).to.be.not.undefined
  })

  it('successfully call generateChartProps with no display options and items data type is object', () => {
    const reactStates = {
      responses: [
        {
          displays: [],
          items: {
            '2019': [
              {
                sample_attribute: 'sample_value'
              }
            ],
            '2018': [
              {
                sample_attribute: 'sample_value'
              }
            ]
          }
        }
      ],
      loading: false
    }
    const result = generateChartProps(reactStates)
    console.log('result chart generator: ', result)
    expect(result).to.be.not.undefined

    const componentResult = result[0][0]({})
    expect(componentResult).to.be.not.undefined
  })

  it('successfully call generateChartProps with display type "pie"', () => {
    const reactStates = {
      responses: [
        {
          displays: [
            {
              type: PIE
            }
          ],
          items: [
            {
              sample_attribute: 'sample_value'
            }
          ]
        }
      ],
      loading: false
    }
    const result = generateChartProps(reactStates)
    console.log('result chart generator: ', result)
    expect(result).to.be.not.undefined

    const componentResult = result[0][0]({})
    expect(componentResult).to.be.not.undefined
  })

  it('successfully call generateChartProps with display type "table"', () => {
    const reactStates = {
      responses: [
        {
          displays: [
            {
              type: TABLE
            }
          ],
          items: [
            {
              sample_attribute: 'sample_value'
            }
          ]
        }
      ],
      loading: false
    }
    const result = generateChartProps(reactStates)
    console.log('result chart generator: ', result)
    expect(result).to.be.not.undefined

    const componentResult = result[0][0]({})
    expect(componentResult).to.be.not.undefined
  })

  it('successfully call generateChartProps without set display type', () => {
    const reactStates = {
      responses: [
        {
          displays: [
            {
              type: null
            }
          ],
          items: [
            {
              sample_attribute: 'sample_value'
            }
          ]
        }
      ],
      loading: false
    }
    const result = generateChartProps(reactStates)
    expect(result).to.be.not.undefined
  })

  it('successfully call generateChartProps with responses is null', () => {
    const reactStates = {
      responses: null,
      loading: false
    }
    const result = generateChartProps(reactStates)
    expect(result).to.be.not.undefined
  })

  it('successfully call generateChartProps with response array is null', () => {
    const reactStates = {
      responses: [null],
      loading: false
    }
    const result = generateChartProps(reactStates)
    expect(result).to.be.not.undefined
  })

  it('successfully call generateLayoutProps with display parameter is null', () => {
    const result = generateLayoutProps(null)
    expect(result).to.be.not.undefined
  })
})
