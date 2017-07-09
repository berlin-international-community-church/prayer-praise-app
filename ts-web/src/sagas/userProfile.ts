import { LOCATION_CHANGE } from 'react-router-redux';
import { call, cancel, put, select, take, takeLatest } from 'redux-saga/effects';

import {
  userProfileLoaded,
  userProfileLoadError
} from '../containers/Home/actions';
import { FETCH_USER_PROFILE } from '../containers/Home/constants';

import API from '../api';

export function* getUserProfile() {
  try {
    const result = yield call(API.fetchUserProfile);
    yield put(userProfileLoaded(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(userProfileLoadError());
  }
}

export function* userProfile() {
  const watcher = yield takeLatest(FETCH_USER_PROFILE, getUserProfile);

  // Suspend execution until location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
}

export default userProfile;
