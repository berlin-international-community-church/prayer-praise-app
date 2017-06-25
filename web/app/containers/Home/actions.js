import {
  FETCH_TOKEN,
  TOKEN_LOADED,
  TOKEN_LOAD_ERROR
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

export function tokenLoadError(payload) {
  return {
    type: TOKEN_LOAD_ERROR,
    payload
  };
}
