import {
  DELETE_MESSAGE,
  DELETE_MESSAGE_FAILED,
  DELETE_MESSAGE_INFLIGHT,
  DELETE_MESSAGE_SUCCESS,
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

export function deleteMessage(payload) {
  return {
    payload,
    type: DELETE_MESSAGE
  };
}

export function deleteMessageInProgress() {
  return {
    type: DELETE_MESSAGE_INFLIGHT
  };
}

export function deleteMessageSuccessful(payload) {
  return {
    payload,
    type: DELETE_MESSAGE_SUCCESS
  };
}

export function deleteMessageFailed() {
  return {
    type: DELETE_MESSAGE_FAILED
  };
}
