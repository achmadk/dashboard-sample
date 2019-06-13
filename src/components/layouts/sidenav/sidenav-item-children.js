import React from 'react'

import NavLink from '@/components/links/nav-link'
import Button from '@material-ui/core/Button'

function renderItem (item, index) {
  const { label, ...otherProps } = item
  const key = label.toLowerCase().split(' ')[0]
  return (
    <li key={`${key}-${index}`}>
      <Button component={NavLink} className='prepend-icon' {...otherProps}>
        <span>{label}</span>
      </Button>
    </li>
  )
}

export default function SidenavItemChildren ({ items }) {
  return <ul>{items.map(renderItem)}</ul>
}
