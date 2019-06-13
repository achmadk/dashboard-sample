import React, { lazy, Suspense } from 'react'

export const headerComponent = () =>
  import(/* webpackChunkName: "header" */ './header')

const Header = lazy(headerComponent)

export default function HeaderContainer () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
  )
}
