import { fromJS } from 'immutable';
import {
  TOKEN_LOADED,
  TOKEN_LOAD_ERROR,
  USER_PROFILE_LOADED,
  USER_PROFILE_LOAD_ERROR
} from './constants';

const initialState = fromJS({
  jwtToken: sessionStorage.getItem('token'),
  username: null,
  profilePic: null,
  error: null
});

function homeReducer(state = initialState, action) {
  switch (action.type) {

    case TOKEN_LOADED:
      sessionStorage.setItem('token', action.payload)
      return state
        .set('jwtToken', action.payload);

    case TOKEN_LOAD_ERROR:
      return state
        .set('jwtToken', null)
        .set('error', TOKEN_LOAD_ERROR)

    case USER_PROFILE_LOADED:
      return state
        .set('username', action.payload.name)
        .set('profilePic', action.payload.picture);

    case TOKEN_LOAD_ERROR:
      return state
        .set('username', null)
        .set('profilePic', null)
        .set('error', TOKEN_LOAD_ERROR)

    default:
      return state;
  }
}

export default homeReducer;
