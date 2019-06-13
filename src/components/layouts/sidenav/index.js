import React, { lazy, Suspense } from 'react'

export const sidenavComponent = () =>
  import(/* webpackChunkName: "sidenav" */ './sidenav')

const Sidenav = lazy(sidenavComponent)

export default function SidenavContainer () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Sidenav />
    </Suspense>
  )
}
