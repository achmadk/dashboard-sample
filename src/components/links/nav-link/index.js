import React, { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'

const BasicNavLink = forwardRef((props, ref) => {
  return <NavLink innerRef={ref} {...props} />
})

export default BasicNavLink
