import React, { Component, cloneElement, Children, createRef } from 'react'
// import PropTypes from 'prop-types'

class ChartistGraph extends Component {
  displayName: 'ChartistGraph'

  chart = createRef()

  static defaultProps = {
    options: {},
    responsiveOptions: []
  }

  componentWillReceiveProps (newProps) {
    this.updateChart(newProps)
  }

  componentWillUnmount () {
    if (this.chartist) {
      try {
        this.chartist.detach()
      } catch (err) {
        throw new Error('Internal chartist error', err)
      }
    }
  }

  componentDidMount () {
    this.updateChart(this.props)
  }

  async updateChart (config) {
    console.log('chart ref: ', this.chart.current)
    // let { default: Chartist } = await import('chartist');
    let Chartist = await import('chartist')
    console.log('Chartist: ', Chartist)

    let { type, data } = config
    let options = config.options || {}
    let responsiveOptions = config.responsiveOptions || []
    let event

    if (this.chartist) {
      this.chartist.update(data, options, responsiveOptions)
    } else {
      this.chartist = new Chartist[type](
        this.chart.current,
        data,
        options,
        responsiveOptions
      )

      if (config.listener) {
        for (event in config.listener) {
          if (config.listener.hasOwnProperty(event)) {
            this.chartist.on(event, config.listener[event])
          }
        }
      }
    }
    console.log('chartist instance: ', this.chartist)
    return this.chartist
  }

  render () {
    const {
      className,
      style,
      children,
      data,
      type,
      options,
      responsiveOptions
    } = this.props
    const childrenWithProps =
      children &&
      Children.map(children, child =>
        cloneElement(child, {
          type,
          data,
          options,
          responsiveOptions
        })
      )
    return (
      <div
        className={`ct-chart${` ${className}` || ''}`}
        ref={this.chart}
        style={style}
      >
        {childrenWithProps}
      </div>
    )
  }
}

// ChartistGraph.propTypes = {
//   type: PropTypes.oneOf(['Line', 'Bar', 'Pie']).isRequired,
//   data: PropTypes.object.isRequired,
//   className: PropTypes.string,
//   options: PropTypes.object,
//   responsiveOptions: PropTypes.array,
//   style: PropTypes.object
// }

export default ChartistGraph
