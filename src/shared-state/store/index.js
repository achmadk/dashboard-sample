import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'

import reducers from '../reducers'

const middlewareLists = [thunk, promise]

export const middlewares = () =>
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middlewareLists)
    : composeWithDevTools({
        trace: true
      })(applyMiddleware(...middlewareLists))

export const store = createStore(reducers, middlewares())

export const persistor = persistStore(store)
