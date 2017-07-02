import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { SUBMIT_MESSAGE } from './constants';
import {
  selectMessageType,
  selectMessageText,
  selectSharingStatus
} from './selectors';
import {
  submitMessageInProgress,
  submitMessageSuccessful,
  submitMessageFailed
} from './actions';

import API from 'utils/api';

export function* submitMessage() {
  try {
    yield put(submitMessageInProgress());
    const messageType = yield select(selectMessageType());
    const messageText = yield select(selectMessageText());
    const sharingStatus = yield select(selectSharingStatus());
    const result = yield call(API.submitMessage, { messageType, messageText, sharingStatus });
    yield put(submitMessageSuccessful(result.data));
  } catch (err) {
    console.error(err);
    yield put(submitMessageFailed());
  }
}

export function* submitMessageWaatcher() {
  const watcher = yield takeLatest(SUBMIT_MESSAGE, submitMessage);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  submitMessageWaatcher
];
