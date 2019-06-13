import React, { PureComponent } from 'react'

import Grid from '@material-ui/core/Grid'

export function withGrid (gridProps) {
  const gridStyleProps = {
    height: '100%',
    ...(gridProps?.item ? { width: '100%' } : {}),
    ...(gridProps?.style || {})
  }
  return function (WrappedComponent) {
    return class ComponentWithGrid extends PureComponent {
      render () {
        return (
          <Grid style={gridStyleProps} {...gridProps}>
            <WrappedComponent {...this.props} />
          </Grid>
        )
      }
    }
  }
}
