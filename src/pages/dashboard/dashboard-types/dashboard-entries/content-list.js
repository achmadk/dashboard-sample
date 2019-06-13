import React from 'react'

import { withGrid } from '@/utils/high-order-components/grid'

function ContentList ({ component: Component, ...otherProps }) {
  return <Component {...otherProps} />
}

export default withGrid({
  item: true,
  sm: 12,
  lg: 6
})(ContentList)
