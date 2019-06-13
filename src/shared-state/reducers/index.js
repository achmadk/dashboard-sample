import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import app from './app'
import settings from './settings'
import user from './user'

import { name, version } from '../../../package.json'

const persistConfig = {
  key: `${name}-v${version}`,
  storage
}

const rootReducers = combineReducers({
  settings,
  user,
  app
})

const reducers = persistReducer(persistConfig, rootReducers)

export default reducers
