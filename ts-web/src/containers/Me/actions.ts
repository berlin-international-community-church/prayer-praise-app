import {
  FETCH_MY_MESSAGES,
  FETCH_MY_MESSAGES_FAILED,
  FETCH_MY_MESSAGES_INFLIGHT,
  FETCH_MY_MESSAGES_SUCCESS
} from './constants';

export function fetchMyMessages() {
  return {
    type: FETCH_MY_MESSAGES
  };
}

export function fetchMyMessagesInProgress() {
  return {
    type: FETCH_MY_MESSAGES_INFLIGHT
  };
}

export function fetchMyMessagesSuccessful(payload) {
  return {
    payload,
    type: FETCH_MY_MESSAGES_SUCCESS
  };
}

export function fetchMyMessagesFailed() {
  return {
    type: FETCH_MY_MESSAGES_FAILED
  };
}
