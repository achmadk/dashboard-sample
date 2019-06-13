import React, { lazy, Suspense } from 'react'

export const loginComponent = () =>
  import(/* webpackChunkName: "login" */ './login')

const LoginPage = lazy(loginComponent)

export default function LoginPageContainer () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  )
}
