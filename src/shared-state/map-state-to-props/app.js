export function getTitlePathParams (app) {
  const title = app?.pathParams?.title || true
  return {
    title
  }
}
