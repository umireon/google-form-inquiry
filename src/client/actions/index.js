import { createAction } from 'redux-actions'

import * as google from 'google'

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export const SAVE_SETTINGS = 'SAVE_SETTINGS'

export const updateSettings = createAction(UPDATE_SETTINGS)

export function saveConfig(settings) {
  return dispatch => {
    dispatch(changeLoading({ isLoading: true }))
    google.script.run
      .withSuccessHandler(
        settings => dispatch(changeLoading({ isLoading: false }))
      )
      .saveConfig(settings.toJS())
  }
}

export function loadConfig() {
  return dispatch => {
    dispatch(changeLoading({ isLoading: true }))
    google.script.run
      .withSuccessHandler(
        settings => {
          dispatch(changeLoading({ isLoading: false, isContentReady: true }))
          dispatch(updateSettings(settings))
        }
      )
      .loadConfig()
  }
}

export const CHANGE_LOADING = 'CHANGE_LOADING'
export const changeLoading = createAction(CHANGE_LOADING)

export function sendNotify(settings) {
  return dispatch => {
    dispatch(changeLoading({ isLoading: true }))
    google.script.run
      .sendNotify(settings)
  }
}
