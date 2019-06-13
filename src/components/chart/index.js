import React, { PureComponent, lazy, Suspense } from 'react'

import Paper from '@material-ui/core/Paper'
import Skeleton from 'react-skeleton-loader'

import withStyles from '@material-ui/styles/withStyles'

export const loadPlotly = () => import('react-plotly.js')

const Plotly = lazy(loadPlotly)

const fallbackComponent = <Skeleton width='100%' height={150} count={21} />

export class ChartComponent extends PureComponent {
  calculatePaperHeight () {
    return {
      height: this.props.loading ? 450 : '100%'
    }
  }
  render () {
    const style = this.calculatePaperHeight()
    const { classes, loading, ...otherProps } = this.props
    return (
      <Paper className={classes.root} style={style}>
        <Suspense fallback={fallbackComponent}>
          {!loading ? <Plotly {...otherProps} /> : fallbackComponent}
        </Suspense>
      </Paper>
    )
  }
}

export const styles = () => ({
  root: {
    flex: '0 0 auto',
    marginBottom: 16
  }
})

export default withStyles(styles)(ChartComponent)
