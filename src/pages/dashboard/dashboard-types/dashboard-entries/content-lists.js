import React from 'react'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Loading from '@/components/loading'
import ContentList from './content-list'

import { withGrid } from '@/utils/high-order-components/grid'
import { getTitlePathParams } from '@/shared-state/map-state-to-props/app'

function ContentLists ({ data, loading, title, ...otherProps }) {
  return data.map(
    (response, index1) =>
      response
        ?.filter(({ tag }) =>
          typeof title === 'string' ? title === tag : true
        )
        .map(({ tag, component: ChartComponent }, index2) => {
          return (
            <ContentList
              key={`content-list-${index1}-${index2}`}
              component={ChartComponent}
              loading={loading}
            />
          )
        }) || <Loading />
  )
}

const mapStateToProps = ({ app }) => ({
  ...getTitlePathParams(app)
})

export default compose(
  withGrid({ container: true, spacing: 2 }),
  withRouter,
  connect(mapStateToProps)
)(ContentLists)
