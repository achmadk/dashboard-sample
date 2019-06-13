import React, { PureComponent } from 'react'

import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import { formatCurrency } from '@/utils/number'

export default class SimpleTableBody extends PureComponent {
  defaultColumnAttributes = {
    label: null,
    displayFormattedCurrency: false,
    align: 'left'
  }
  renderChildren (item, index) {
    const { columns } = this.props
    return (
      <TableRow key={`simple-table-row-${index}`}>
        {columns.length > 0 &&
          columns.map((col, index) => {
            const { label, displayFormattedCurrency, align } =
              col || this.defaultColumnAttributes
            let value = item[label]
            if (displayFormattedCurrency) {
              value = formatCurrency(value)
            }
            return (
              <TableCell key={`${index}`} align={align}>
                {value}
              </TableCell>
            )
          }, this)}
      </TableRow>
    )
  }
  render () {
    const { items } = this.props
    return (
      <TableBody>
        {items?.length > 0 && items.map(this.renderChildren, this)}
      </TableBody>
    )
  }
}
