import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import groupBy from 'lodash.groupby'

import { getUserParams } from '@/shared-state/map-state-to-props/user'

export class AverageTenderDurationComponent extends PureComponent {
  state = {
    items: null,
    attributes: null,
    yValues: null,
    allPieData: null
  }
  async componentDidMount () {
    const { userParams } = this.props
    try {
      const {
        getAverageTenderDuration
      } = await import('@/api/core/requests/dashboard/prcmts/avg_tender_duration')
      const { data: responseData } = await getAverageTenderDuration(userParams)
      const items = responseData?.data?.items || null
      const attributes = Object.keys(items[0])
      const allPieData = attributes.map((attribute, index) => {
        const pieData = groupBy(items, attribute)
        const labels = Object.keys(pieData)
        const values = labels.map(label => pieData[label].length)
        return {
          labels,
          values,
          type: 'pie',
          text: attribute,
          textposition: 'inside',
          domain: { column: index },
          hole: 0.4
        }
      })
      const yValues = items.map(({ lead_time_prcmt }) => lead_time_prcmt)
      console.log('attributes: ', attributes)
      this.setState({
        items,
        attributes,
        yValues,
        allPieData
      })
    } catch (error) {
      console.log(error)
    }
  }
  render () {
    const { allPieData } = this.state
    return (
      <>
        <h2 className='article-title'>Average Tender Duration</h2>
        <div className='ui-animate'>
          <pre>{JSON.stringify(allPieData, null, 4)}</pre>
        </div>
      </>
    )
  }
}

export const mapStateToProps = ({ user }) => getUserParams(user)

export default compose(connect(mapStateToProps))(AverageTenderDurationComponent)
