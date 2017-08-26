import { WebAuth } from 'auth0-js';
import { Record } from 'immutable';
import { AppStateType } from '../constants/types';

import Config from '../config';
import {
  LOGIN,
  LOGOUT,
  RESET_SIDEBAR,
  SWITCH_LANGUAGE,
  TOGGLE_SIDEBAR,
  TOKEN_LOAD_ERROR,
  TOKEN_LOADED,
  USER_PROFILE_LOAD_ERROR,
  USER_PROFILE_LOADED
} from '../containers/App/constants';

export const istate: AppStateType = {
  accessToken: sessionStorage.getItem('accessToken'),
  auth0: new WebAuth({
    // tslint:disable-next-line:no-string-literal
    audience: process.env['AUTH0_AUDIENCE'],
    // tslint:disable-next-line:no-string-literal
    clientID: process.env['AUTH0_CLIENT_ID'] || 'changeme',
    // tslint:disable-next-line:no-string-literal
    domain: process.env['AUTH0_DOMAIN'] || 'changeme.example.com',
    redirectUri: Config.env.callbackURL,
    responseType: 'token id_token',
    scope: 'openid profile'
  }),
  error: null,
  idToken: null,
  jwtToken: sessionStorage.getItem('jwtToken'),
  locale: 'en',
  profilePic: null,
  sidebarVisible: true,
  tokenExpiresAt: undefined,
  username: undefined
};

const Rec = Record(istate);
export const initialState = new Rec();

export function appReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN:
      sessionStorage.setItem('accessToken', action.payload.accessToken);
      return state
        .set('accessToken', action.payload.accessToken)
        .set('idToken', action.payload.idToken)
        .set('tokenExpiresAt', action.payload.tokenExpiresAt);

    case LOGOUT:
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('accessToken');
      return state
        .merge(initialState)
        .set('accessToken', null)
        .set('jwtToken', null);

    case TOKEN_LOADED:
      sessionStorage.setItem('jwtToken', action.payload);
      return state
        .set('jwtToken', action.payload);

    case TOKEN_LOAD_ERROR:
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('accessToken');
      return state
        .set('accessToken', null)
        .set('jwtToken', null)
        .set('username', null)
        .set('profilePic', null)
        .set('error', TOKEN_LOAD_ERROR);

    case USER_PROFILE_LOADED:
      return state
        .set('username', action.payload.name)
        .set('profilePic', action.payload.picture);

    case USER_PROFILE_LOAD_ERROR:
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('accessToken');
      return state
        .set('accessToken', null)
        .set('jwtToken', null)
        .set('username', null)
        .set('profilePic', null)
        .set('error', TOKEN_LOAD_ERROR);

    case SWITCH_LANGUAGE:
      return state
        .set('locale', action.payload);

    case TOGGLE_SIDEBAR:
      return state
        .set('sidebarVisible', !state.get('sidebarVisible'));

    case RESET_SIDEBAR:
      return state
        .set('sidebarVisible', true);

    default:
      return state;
  }
}
