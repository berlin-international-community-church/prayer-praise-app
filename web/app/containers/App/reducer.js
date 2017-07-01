import auth0 from 'auth0-js';
import { fromJS } from 'immutable';

import {
  LOGIN,
  LOGOUT
} from './constants';

import {
  TOKEN_LOADED,
  TOKEN_LOAD_ERROR,
  USER_PROFILE_LOADED,
  USER_PROFILE_LOAD_ERROR
} from '../Home/constants';

const initialState = fromJS({
  auth0: new auth0.WebAuth({
    domain: 'rockyj.eu.auth0.com',
    clientID: '',
    redirectUri: 'http://localhost:3000/authCallback',
    audience: 'https://rockyj.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
  }),
  accessToken: null,
  idToken: null,
  tokenExpiresAt: null,
  jwtToken: sessionStorage.getItem('token'),
  username: null,
  profilePic: null,
  error: null
});

function globalReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN:
      return state
        .set('accessToken', action.payload.accessToken)
        .set('idToken', action.payload.idToken)
        .set('tokenExpiresAt', action.payload.tokenExpiresAt);

    case LOGOUT:
      sessionStorage.removeItem('token');
      return state
        .merge(initialState)
        .set('jwtToken', null);

    case TOKEN_LOADED:
      sessionStorage.setItem('token', action.payload);
      return state
        .set('jwtToken', action.payload);

    case TOKEN_LOAD_ERROR:
      return state
        .set('jwtToken', null)
        .set('error', TOKEN_LOAD_ERROR);

    case USER_PROFILE_LOADED:
      return state
        .set('username', action.payload.name)
        .set('profilePic', action.payload.picture);

    case USER_PROFILE_LOAD_ERROR:
      return state
        .set('jwtToken', null)
        .set('username', null)
        .set('profilePic', null)
        .set('error', TOKEN_LOAD_ERROR);

    default:
      return state;
  }
}

export default globalReducer;
