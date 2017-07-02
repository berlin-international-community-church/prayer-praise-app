import { fromJS } from 'immutable';
import {
  CHANGE_MESSAGE_TYPE,
  CHANGE_MESSAGE_TEXT,
  CHANGE_SHARED_STATUS,
  SUBMIT_MESSAGE_INFLIGHT,
  SUBMIT_MESSAGE_SUCCESS,
  SUBMIT_MESSAGE_FAILED
} from './constants';

const initialState = fromJS({
  messageType: 'prayer',
  messageText: '',
  sharedWithChurch: false,
  loading: false,
  error: null
});

function prayerFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MESSAGE_TYPE:
      return state
        .set('messageType', action.payload.messageType);

    case CHANGE_MESSAGE_TEXT:
      return state
        .set('messageText', action.payload);

    case CHANGE_SHARED_STATUS:
      return state
        .set('sharedWithChurch', !state.get('sharedWithChurch'));

    case SUBMIT_MESSAGE_INFLIGHT:
      return state
        .set('loading', true);

    case SUBMIT_MESSAGE_SUCCESS:
      return state
        .set('loading', true);

    case SUBMIT_MESSAGE_FAILED:
      return state
        .set('loading', false)
        .set('error', SUBMIT_MESSAGE_FAILED);

    default:
      return state;
  }
}

export default prayerFormReducer;
