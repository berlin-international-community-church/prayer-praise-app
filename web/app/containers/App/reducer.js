import auth0 from 'auth0-js';
import { fromJS } from 'immutable';

import {
  LOGIN,
} from './constants';

const initialState = fromJS({
  auth0: new auth0.WebAuth({
    domain: 'rockyj.eu.auth0.com',
    clientID: 'foo__',
    redirectUri: 'http://localhost:3000/authCallback',
    audience: 'https://rockyj.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  }),
  accessToken: null,
  idToken: null,
  tokenExpiresAt: null
});

function globalReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN:
      return state
        .set('accessToken', action.payload.accessToken)
        .set('idToken', action.payload.idToken)
        .set('tokenExpiresAt', action.payload.tokenExpiresAt);

    default:
      return state;
  }
}

export default globalReducer;
