import React from 'react'

import Button from '@material-ui/core/Button'
import NavLink from '@/components/links/nav-link'

function SidenavButton ({ icon, label, ...otherProps }) {
  return (
    <Button component={NavLink} {...otherProps}>
      <i className='nav-icon material-icons'>{icon}</i>
      <span className='nav-text'>{label}</span>
    </Button>
  )
}

export default SidenavButton
