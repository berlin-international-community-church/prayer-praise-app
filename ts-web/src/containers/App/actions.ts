import {
  FETCH_TOKEN,
  FETCH_USER_PROFILE,
  LOGIN,
  LOGOUT,
  TOKEN_LOAD_ERROR,
  TOKEN_LOADED,
  USER_PROFILE_LOAD_ERROR,
  USER_PROFILE_LOADED
} from './constants';

export function login(payload) {
  return {
    payload,
    type: LOGIN
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function fetchToken() {
  return {
    type: FETCH_TOKEN
  };
}

export function tokenLoaded(payload) {
  return {
    payload,
    type: TOKEN_LOADED
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
    payload,
    type: USER_PROFILE_LOADED
  };
}

export function userProfileLoadError() {
  return {
    type: USER_PROFILE_LOAD_ERROR
  };
}
