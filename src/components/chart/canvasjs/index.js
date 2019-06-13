import React, { PureComponent, Suspense, lazy } from 'react'

import Paper from '@material-ui/core/Paper'
import Skeleton from 'react-skeleton-loader'

import withStyles from '@material-ui/styles/withStyles'

const loadCanvasJSGraph = () => import('./src')

const CanvasJSGraph = lazy(loadCanvasJSGraph)

const fallbackComponent = <Skeleton width='100%' height={150} count={21} />

export class ChartComponent extends PureComponent {
  calculatePaperHeight () {
    return {
      height: this.props.loading ? 450 : '100%'
      // height: 450
    }
  }
  render () {
    const style = this.calculatePaperHeight()
    const { classes, loading, ...otherProps } = this.props
    console.log('other props is chart component: ', otherProps)
    return (
      <Paper className={classes.root} style={style}>
        <Suspense fallback={fallbackComponent}>
          {!loading ? (
            <CanvasJSGraph className='ct-octave' {...otherProps} />
          ) : (
            fallbackComponent
          )}
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
