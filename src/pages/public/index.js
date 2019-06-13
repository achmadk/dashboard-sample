import React, { lazy, Suspense } from 'react'

export const publicComponent = () =>
  import(/* webpackChunkName: "public" */ './public')

const PublicPage = lazy(publicComponent)

export default function PublicPageContainer () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicPage />
    </Suspense>
  )
}
