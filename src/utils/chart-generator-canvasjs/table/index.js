import React from 'react'

import Table from '@/components/table/simple'

export default function generateTable ({ display, items }) {
  const { columns, name: title, initialHeight } = display
  const tableProps = {
    columns,
    title,
    items,
    initialHeight
  }
  return propsFromParent => <Table {...propsFromParent} {...tableProps} />
}
