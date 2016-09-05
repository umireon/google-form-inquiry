import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'

import * as google from 'google'

import { CHANGE_LOADING } from '../actions'

export default handleActions({
  [CHANGE_LOADING]: (state, action) => {
    return state.merge(action.payload)
  },
}, fromJS({
  isLoading: true,
  isContentReady: false,
}))
