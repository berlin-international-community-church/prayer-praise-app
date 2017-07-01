import {
  FETCH_TOKEN,
  TOKEN_LOADED,
  TOKEN_LOAD_ERROR,
  FETCH_USER_PROFILE,
  USER_PROFILE_LOADED,
  USER_PROFILE_LOAD_ERROR
} from './constants';

export function fetchToken() {
  return {
    type: FETCH_TOKEN
  };
}

export function tokenLoaded(payload) {
  return {
    type: TOKEN_LOADED,
    payload
  };
}

export function tokenLoadError() {
  return {
    type: TOKEN_LOAD_ERROR
  };
}

export function fetchUserProfile() {
  return {
    type: FETCH_USER_PROFILE
  };
}

export function userProfileLoaded(payload) {
  return {
    type: USER_PROFILE_LOADED,
    payload
  };
}

export function userProfileLoadError() {
  return {
    type: USER_PROFILE_LOAD_ERROR
  };
}
