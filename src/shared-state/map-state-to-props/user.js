export function getUserParams (user) {
  const { username, authn_token } = user?.data || {
    username: null,
    authn_token: null
  }
  const userParams = { username, authn_token }
  const isAuthenticated = userParams.username !== null
  return {
    userParams,
    isAuthenticated
  }
}
