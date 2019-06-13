import React from 'react'

import { TableHead, TableRow, TableCell } from '@material-ui/core'

function SimpleTableHead ({ columns }) {
  return (
    <TableHead>
      <TableRow>{renderTableCells(columns)}</TableRow>
    </TableHead>
  )
}

function renderTableCells (columns) {
  return (
    columns.length > 0 &&
    columns.map(({ label, name, align }, index) => (
      <TableCell key={`${label}-${index}`} align={align}>
        {name}
      </TableCell>
    ))
  )
}

SimpleTableHead.defaultProps = {
  columns: {
    align: 'left'
  }
}

export default SimpleTableHead
