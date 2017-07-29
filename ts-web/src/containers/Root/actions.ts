import {
  EXPAND_MESSAGE,
  FETCH_SHARED_MESSAGES,
  FETCH_SHARED_MESSAGES_FAILED,
  FETCH_SHARED_MESSAGES_INFLIGHT,
  FETCH_SHARED_MESSAGES_SUCCESS
} from './constants';

export function fetchSharedMessages() {
  return {
    type: FETCH_SHARED_MESSAGES
  };
}

export function fetchSharedMessagesInProgress() {
  return {
    type: FETCH_SHARED_MESSAGES_INFLIGHT
  };
}

export function fetchSharedMessagesSuccessful(payload) {
  return {
    payload,
    type: FETCH_SHARED_MESSAGES_SUCCESS
  };
}

export function fetchSharedMessagesFailed() {
  return {
    type: FETCH_SHARED_MESSAGES_FAILED
  };
}

export function expandMessage(payload) {
  return {
    payload,
    type: EXPAND_MESSAGE
  };
}
