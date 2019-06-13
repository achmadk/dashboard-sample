import React, { PureComponent, lazy, Suspense } from 'react'

import Paper from '@material-ui/core/Paper'
import Skeleton from 'react-skeleton-loader'

import withStyles from '@material-ui/styles/withStyles'

export const loadTableContent = () => import('./content')

const TableContent = lazy(loadTableContent)

const fallbackComponent = <Skeleton width='100%' height={150} count={25} />

export class SimpleTable extends PureComponent {
  static defaultProps = {
    title: 'Simple Table Title',
    loading: true,
    initialHeight: 450
  }
  calculatePaperHeight () {
    const { loading, initialHeight } = this.props
    return {
      height: loading ? initialHeight : '100%'
    }
  }
  render () {
    const { classes } = this.props
    const style = this.calculatePaperHeight()
    return (
      <Paper className={classes.tableRoot} style={style}>
        <Suspense fallback={fallbackComponent}>
          <TableContent {...this.props} />
        </Suspense>
      </Paper>
    )
  }
}

export const styles = () => ({
  tableRoot: {
    marginBottom: 16,
    overflowX: 'auto'
  },
  title: {
    flex: '0 0 auto'
  }
})

export default withStyles(styles)(SimpleTable)
