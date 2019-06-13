import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'

// import Button from '@material-ui/core/Button'
import Loading from '@/components/loading'
import ContentLists from './content-lists'

import { getTitlePathParams } from '@/shared-state/map-state-to-props/app'
import { getUserParams } from '@/shared-state/map-state-to-props/user'
import { getDataFromURL } from '@/api/core/requests'
// import { generateChartProps } from '@/utils/chart-generator-chartist'
// import { generateChartProps } from '@/utils/chart-generator'
import { generateChartProps } from '@/utils/chart-generator-canvasjs'
import { sendErrorMessage } from '@/utils/error-handling/async-calls'

import dashboardContents from '@/constants/dashboard-contents'

function getDashboardData () {
  const {
    match,
    userParams,
    enqueueSnackbar /*, closeSnackbar, setStatusFetchResources */
  } = this.props
  const selectedEntries = dashboardContents.find(({ to }) => to === match.url)
  this.setState(
    {
      selectedEntries
    },
    async () => {
      try {
        const { entries: entriesPayloads } = selectedEntries || {
          entries: []
        }
        if (entriesPayloads.length > 0) {
          const asyncCalls = userParams =>
            entriesPayloads.map(async ({ endpoint, additionalParameters }) => {
              const params = {
                ...userParams,
                ...(additionalParameters || {})
              }
              return await getDataFromURL(endpoint, params) // eslint-disable-line
            })
          const asyncCallResponses = await Promise.all(asyncCalls(userParams))
          const responses = asyncCallResponses.map((response, index) => {
            const { items: originalItems } = response?.data?.data || {
              items: []
            }
            const items =
              (selectedEntries.entries[index].transformItems &&
                selectedEntries.entries[index].transformItems(originalItems)) ||
              originalItems
            return (
              {
                ...selectedEntries.entries[index],
                ...(response?.data?.data || {}),
                items
              } || {}
            )
          })
          this.setState({
            responses,
            loading: false
          })
        }
      } catch (error) {
        const message = sendErrorMessage(error)
        this.setState({
          loading: false
        })
        enqueueSnackbar(message, {
          variant: 'error'
        })
      }
    }
  )
  // }
}

export class DashboardEntries extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      selectedEntries: null,
      responses: null,
      chartProps: null,
      loading: true
    }
    this.getDashboardData = getDashboardData.bind(this)
    this._isMounted = false
    this._notificationId = null
  }
  componentDidMount () {
    this._isMounted = true
    this.getDashboardData()
  }
  componentWillUnmount () {
    this._isMounted = false
  }
  render () {
    const { selectedEntries, responses, loading } = this.state
    const chartPropsResponses = generateChartProps(this.state) || []
    return (
      <>
        <h2 className='article-title'>
          {typeof title === 'boolean' && selectedEntries?.label}
        </h2>
        <div className='ui-animate'>
          {!loading ? (
            chartPropsResponses.length > 0 && (
              <ContentLists data={chartPropsResponses} loading={loading} />
            )
          ) : (
            <Loading />
          )}
          {process.env.NODE_ENV !== 'production' && (
            <pre>{JSON.stringify(responses, null, 4)}</pre>
          )}
        </div>
      </>
    )
  }
}

export const mapStateToProps = ({ user, app }) => ({
  ...getUserParams(user),
  ...getTitlePathParams(app)
})

export default compose(
  connect(mapStateToProps),
  withRouter,
  withSnackbar
)(DashboardEntries)
