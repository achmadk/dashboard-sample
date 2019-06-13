import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const middlewares = [ thunk, promise ]

export const mockStore = configureStore(middlewares)
