import { fromJS } from 'immutable';

import { SharedMessagesType } from '../constants/types';
import {
  FETCH_SHARED_MESSAGES_FAILED,
  FETCH_SHARED_MESSAGES_INFLIGHT,
  FETCH_SHARED_MESSAGES_SUCCESS
} from '../containers/Root/constants';

const init: SharedMessagesType = {
  displayMessage: undefined,
  error: undefined,
  loading: false,
  messages: []
};

const initialState = fromJS(init);

export function sharedMessagesReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_SHARED_MESSAGES_INFLIGHT:
      return state
        .set('loading', true);

    case FETCH_SHARED_MESSAGES_SUCCESS:
      return state
        .set('loading', false)
        .set('messages', action.payload)
        .set('displayMessage', undefined);

    case FETCH_SHARED_MESSAGES_FAILED:
      return state
        .set('loading', false)
        .set('error', FETCH_SHARED_MESSAGES_FAILED)
        .set('displayMessage', 'Please refresh / try again later.');

    default:
      return state;
  }
}
