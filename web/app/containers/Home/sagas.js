import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { FETCH_TOKEN } from './constants';
import {
  tokenLoaded,
  tokenLoadError
} from './actions';
import { selectAccessToken } from 'containers/App/selectors';

import API from 'utils/api';

export function* createToken() {
  const accessToken = yield select(selectAccessToken());
  try {
    const result = yield call(API.createToken, accessToken);
    yield put(tokenLoaded(result.data.token));
  } catch (err) {
    console.error(err);
    yield put(tokenLoadError());
  }
}

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
