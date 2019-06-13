import React, { lazy, Suspense } from 'react'

export const averageTenderDurationComponent = () =>
  import(/* webpackChunkName: "average-tender-duration" */ './average-tender-duration')

const AverageTenderDuration = lazy(averageTenderDurationComponent)

export default function AverageTenderDurationContainer () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AverageTenderDuration />
    </Suspense>
  )
}
