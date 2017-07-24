import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  updateMessageFailed,
  updateMessageInProgress,
  updateMessageSuccessful
} from '../containers/Me/actions';
import { UPDATE_MESSAGE } from '../containers/Me/constants';

import AppAPI from '../api';

function* updtMessage(action) {
  try {
    yield put(updateMessageInProgress());

    const state = yield select();
    const id           = state.get('myData').get('messageForEdit').id;
    const messageType  = state.get('messages').get('messageType');
    const messageText  = state.get('messages').get('messageText');
    const sharedStatus = state.get('messages').get('sharedStatus');

    yield call(AppAPI.updateMessage, { id, messageType, messageText, sharedStatus });
    yield put(updateMessageSuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(updateMessageFailed());
  }
}

export function* updateMessage() {
  yield takeLatest(UPDATE_MESSAGE, updtMessage);
}
