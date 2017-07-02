import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { FETCH_USER_PROFILE } from '../Home/constants';
import {
  userProfileLoaded,
  userProfileLoadError
} from '../Home/actions';

import API from 'utils/api';

export function* getUserProfile() {
  try {
    const result = yield call(API.fetchUserProfile);
    yield put(userProfileLoaded(result.data));
  } catch (err) {
    console.error(err);
    yield put(userProfileLoadError());
  }
}

export function* userProfile() {
  const watcher = yield takeLatest(FETCH_USER_PROFILE, getUserProfile);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  userProfile
];
