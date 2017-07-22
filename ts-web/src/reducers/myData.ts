import { fromJS } from 'immutable';

import { MyData } from '../constants/types';
import {
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

    default:
      return state;
  }
}
