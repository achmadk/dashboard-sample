import React, { PureComponent } from 'react'

import Paper from '@material-ui/core/Paper'
import Skeleton from 'react-skeleton-loader'

import withStyles from '@material-ui/styles/withStyles'

export class LoadingComponent extends PureComponent {
  static defaultProps = {
    initialHeight: 450
  }
  calculatePaperHeight () {
    const { loading, initialHeight } = this.props
    return {
      height: loading ? initialHeight : '100%'
    }
  }
  render () {
    const style = this.calculatePaperHeight()
    const { classes, initialHeight } = this.props
    return (
      <Paper className={classes.root} style={style}>
        <Skeleton width='100%' height={initialHeight} count={21} />
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

export default withStyles(styles)(LoadingComponent)
