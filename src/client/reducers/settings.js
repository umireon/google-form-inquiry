import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'

import * as google from 'google'

import { UPDATE_SETTINGS } from '../actions'

export default handleActions({
  [UPDATE_SETTINGS]: (state, action) => {
    return state.merge(action.payload)
  },
}, fromJS({
  notifyEnabled: false,
  notifyTemplateFile: '',
  notifyToEmail: '',
  notifyToName: '',
  replyEnabled: false,
  replyTemplateFile: '',
  replyToEmailFieldId: '',
  replyToNameFieldId: '',
  mailFromEmail: '',
  mailFromName: '',
  mailReplyToEmail: '',
  mailReplyToName: '',
  mailSgApiKey: '',
  items: [],
}))
