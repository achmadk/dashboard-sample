import React, { lazy, Suspense } from 'react'

export const profileComponent = () =>
  import(/* webpackChunkName: "profile" */ './profile')

const ProfilePage = lazy(profileComponent)

export default function ProfilePageContainer () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePage />
    </Suspense>
  )
}
