import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { SUBMIT_MESSAGE } from '../containers/Praise/constants';

import {
  submitMessageInProgress,
  submitMessageSuccessful,
  submitMessageFailed
} from '../containers/Praise/actions';

import API from '../api';

export function* submitMessage() {
  try {
    yield put(submitMessageInProgress());

    const state = yield select();
    const messageType   = state.get('messages').get('messageType');
    const messageText   = state.get('messages').get('messageText');
    const sharingStatus = state.get('messages').get('sharingStatus');

    const result = yield call(API.submitMessage, { messageType, messageText, sharingStatus });
    yield put(submitMessageSuccessful());
  } catch (err) {
    console.error(err);
    yield put(submitMessageFailed());
  }
}

export function* messages() {
  const watcher = yield takeLatest(SUBMIT_MESSAGE, submitMessage);
}

// Bootstrap sagas
export default [
  messages
];
