import { combineReducers } from 'redux'

import settings from './settings'
import loading from './loading'

export default combineReducers({
  settings,
  loading,
})
