import React, { lazy, Suspense } from 'react'

export const footerComponent = () =>
  import(/* webpackChunkName: "footer" */ './footer')

const Footer = lazy(footerComponent)

export default function FooterContainer () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </Suspense>
  )
}
