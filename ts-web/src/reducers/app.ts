import { WebAuth } from 'auth0-js';
import { fromJS } from 'immutable';

import {
  LOGIN,
  LOGOUT
} from '../containers/App/constants';

import {
  TOKEN_LOAD_ERROR,
  TOKEN_LOADED,
  USER_PROFILE_LOAD_ERROR,
  USER_PROFILE_LOADED
} from '../containers/Home/constants';

export const initialState = fromJS({
  accessToken: null,
  auth0: new WebAuth({
    // tslint:disable-next-line:no-string-literal
    audience: process.env['AUTH0_AUDIENCE'],
    // tslint:disable-next-line:no-string-literal
    clientID: process.env['AUTH0_CLIENT_ID'],
    // tslint:disable-next-line:no-string-literal
    domain: process.env['AUTH0_DOMAIN'],
    redirectUri: 'http://localhost:3000/authCallback',
    responseType: 'token id_token',
    scope: 'openid profile'
  }),
  error: null,
  idToken: null,
  jwtToken: sessionStorage.getItem('token'),
  profilePic: null,
  tokenExpiresAt: null,
  username: null
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
      sessionStorage.removeItem('token');
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
