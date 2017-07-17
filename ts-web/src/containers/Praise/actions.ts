import {
  CHANGE_MESSAGE_TYPE,
  CHANGE_MESSAGE_TEXT,
  CHANGE_SHARED_STATUS,
  SUBMIT_MESSAGE,
  SUBMIT_MESSAGE_INFLIGHT,
  SUBMIT_MESSAGE_SUCCESS,
  SUBMIT_MESSAGE_FAILED
} from './constants';

export function changeMessageType(payload) {
  return {
    type: CHANGE_MESSAGE_TYPE,
    payload
  };
}

export function changeMessageText(payload) {
  return {
    type: CHANGE_MESSAGE_TEXT,
    payload
  };
}

export function changeSharedStatus(payload) {
  return {
    type: CHANGE_SHARED_STATUS,
    payload
  };
}

export function submitMessage() {
  return {
    type: SUBMIT_MESSAGE
  };
}

export function submitMessageInProgress() {
  return {
    type: SUBMIT_MESSAGE_INFLIGHT
  };
}

export function submitMessageSuccessful() {
  return {
    type: SUBMIT_MESSAGE_SUCCESS
  };
}

export function submitMessageFailed() {
  return {
    type: SUBMIT_MESSAGE_FAILED
  };
}
