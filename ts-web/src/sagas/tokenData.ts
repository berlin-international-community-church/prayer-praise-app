import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { FETCH_TOKEN } from '../containers/App/constants';
import {
  tokenLoaded,
  tokenLoadError
} from '../containers/App/actions';

import AppAPI from '../api';

export function* createToken() {
  const state = yield select();
  const accessToken = state.get('app').get('accessToken');

  try {
    const result = yield call(AppAPI.createToken, accessToken);
    yield put(tokenLoaded(result.data.token));
  } catch (err) {
    console.error(err);
    yield put(tokenLoadError());
  }
}

export function* tokenData() {
  const watcher = yield takeLatest(FETCH_TOKEN, createToken);
}

export default [
  tokenData
];
