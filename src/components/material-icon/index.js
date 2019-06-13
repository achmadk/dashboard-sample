import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import MaterialIconDefault from './icon'

export default class MaterialIcon extends PureComponent {
  static propTypes = {
    icon: PropTypes.string
  }
  static defaultProps = {
    icon: ''
  }
  render () {
    const { icon, ...otherProps } = this.props

    return <MaterialIconDefault icon={icon} {...otherProps} />
  }
}
