import { fromJS } from 'immutable';

import { MyData } from '../constants/types';
import {
  DELETE_MESSAGE_FAILED,
  DELETE_MESSAGE_INFLIGHT,
  DELETE_MESSAGE_SUCCESS,
  EDIT_MESSAGE_FAILED,
  EDIT_MESSAGE_INFLIGHT,
  EDIT_MESSAGE_SUCCESS,
  FETCH_MY_MESSAGES_FAILED,
  FETCH_MY_MESSAGES_INFLIGHT,
  FETCH_MY_MESSAGES_SUCCESS
} from '../containers/Me/constants';

const init: MyData = {
  displayMessage: undefined,
  error: undefined,
  loading: false,
  myMessages: []
};

const initialState = fromJS(init);

export function myDataReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_MY_MESSAGES_INFLIGHT:
      return state
        .set('loading', true);

    case FETCH_MY_MESSAGES_SUCCESS:
      return state
        .set('loading', false)
        .set('myMessages', action.payload)
        .set('displayMessage', undefined);

    case FETCH_MY_MESSAGES_FAILED:
      return state
        .set('loading', false)
        .set('error', FETCH_MY_MESSAGES_FAILED)
        .set('displayMessage', 'Please refresh / try again later.');

    case DELETE_MESSAGE_INFLIGHT:
      return state
        .set('loading', true);

    case DELETE_MESSAGE_SUCCESS:
      return state
        .set('loading', false)
        .set('myMessages', action.payload)
        .set('displayMessage', undefined);

    case DELETE_MESSAGE_FAILED:
      return state
        .set('loading', false)
        .set('error', DELETE_MESSAGE_FAILED)
        .set('displayMessage', 'Please refresh / try again later.');

    case EDIT_MESSAGE_INFLIGHT:
      return state
        .set('loading', true);

    case EDIT_MESSAGE_SUCCESS:
      return state
        .set('loading', false)
        .set('displayMessage', undefined);

    case EDIT_MESSAGE_FAILED:
      return state
        .set('loading', false)
        .set('error', EDIT_MESSAGE_FAILED)
        .set('displayMessage', 'Please refresh / try again later.');

    default:
      return state;
  }
}
