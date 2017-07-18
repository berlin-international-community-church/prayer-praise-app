import { fromJS } from 'immutable';

import { PrayerPraise, ShareStatus } from '../constants/enums';
import { MessagesStateType } from '../constants/types';
import {
  CHANGE_MESSAGE_TEXT,
  CHANGE_MESSAGE_TYPE,
  CHANGE_SHARED_STATUS,
  SUBMIT_MESSAGE_FAILED,
  SUBMIT_MESSAGE_INFLIGHT,
  SUBMIT_MESSAGE_SUCCESS
} from '../containers/Praise/constants';

const init: MessagesStateType = {
  displayMessage: undefined,
  error: undefined,
  loading: false,
  messageText: '',
  messageType: PrayerPraise.PRAISE,
  sharedStatus:  ShareStatus.SHARE_WITH_NOONE
};

const initialState = fromJS(init);

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MESSAGE_TYPE:
      return state
        .set('messageType', action.payload);

    case CHANGE_MESSAGE_TEXT:
      return state
        .set('displayMessage', '')
        .set('messageText', action.payload);

    case CHANGE_SHARED_STATUS:
      return state
        .set('displayMessage', '')
        .set('sharedStatus', action.payload);

    case SUBMIT_MESSAGE_INFLIGHT:
      return state
        .set('loading', true);

    case SUBMIT_MESSAGE_SUCCESS:
      return state
        .set('loading', false)
        .set('messageText', '')
        .set('displayMessage', 'Save successful!');

    case SUBMIT_MESSAGE_FAILED:
      return state
        .set('loading', false)
        .set('error', SUBMIT_MESSAGE_FAILED)
        .set('displayMessage', 'Save unsuccessful! Please refresh and try later.');

    default:
      return state;
  }
}
