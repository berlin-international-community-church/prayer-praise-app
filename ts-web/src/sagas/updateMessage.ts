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

    const state        = yield select();
    const id           = state.myData.messageForEdit.id;
    const messageType  = state.myData.messageForEdit.messageType;
    const messageText  = state.myData.messageForEdit.newText;
    const sharedStatus = state.myData.messageForEdit.newSharedStatus;

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
