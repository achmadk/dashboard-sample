import React, { lazy, Suspense } from 'react'

export const loadDashboardEntries = () =>
  import(/* webpackChunkName: "dashboard-entries" */ './dashboard-entries')

const DashboardEntries = lazy(loadDashboardEntries)

export default function DashboardEntriesContainer () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardEntries />
    </Suspense>
  )
}
