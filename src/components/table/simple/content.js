import React from 'react'

import Skeleton from 'react-skeleton-loader'
import Table from '@material-ui/core/Table'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TableHead from './head'
import TableBody from './body'

export default function SimpleTableContent ({
  classes,
  items,
  title,
  loading,
  columns
}) {
  const tableHeadProps = {
    columns
  }
  const tableBodyProps = {
    loading,
    items,
    columns
  }
  return (
    <>
      <Toolbar>
        <div className={classes.title}>
          <Typography variant='h6'>{title}</Typography>
        </div>
      </Toolbar>
      {!loading ? (
        <Table>
          <TableHead {...tableHeadProps} />
          <TableBody {...tableBodyProps} />
        </Table>
      ) : (
        <Skeleton width='100%' height={150} count={26} />
      )}
    </>
  )
}
