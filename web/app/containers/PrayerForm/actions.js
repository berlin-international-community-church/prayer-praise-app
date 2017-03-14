import {
  CHANGE_PRAYER_TEXT,
  SUBMIT_PRAYER
} from './constants';

export function changePrayerText(payload) {
  return {
    type: CHANGE_PRAYER_TEXT,
    payload
  };
}

export function submitPrayer() {
  return {
    type: SUBMIT_PRAYER
  };
}
