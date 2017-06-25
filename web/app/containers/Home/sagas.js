import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_TOKEN } from './constants';
import { tokenLoaded, tokenLoadError } from './actions';

import API from 'utils/api';
import { selectAccessToken } from 'containers/App/selector';

export function* createToken() {
  const accessToken = yield select(selectAccessToken());

  try {
    const result = yield call(API.createToken, accessToken);
    yield put(tokenLoaded(result));
  } catch (err) {
    yield put(tokenLoadError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* tokenData() {
  const watcher = yield takeLatest(FETCH_TOKEN, createToken);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  tokenData
];
