import {
  LOGIN,
  LOGOUT
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
