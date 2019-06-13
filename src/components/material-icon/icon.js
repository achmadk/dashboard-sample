// Style: <link rel="stylesheet" href="vendors/material-icons/material-icons.css">
// https://github.com/material-components/material-components-web-react/blob/master/packages/material-icon/index.js

import React, { PureComponent } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class IconComponent extends PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string
  }
  static defaultProps = {
    icon: '',
    className: ''
  }
  render () {
    const { className, icon, ...otherProps } = this.props
    const classes = classnames('material-icons', className)
    return (
      <i className={classes} {...otherProps}>
        {icon}
      </i>
    )
  }
}
