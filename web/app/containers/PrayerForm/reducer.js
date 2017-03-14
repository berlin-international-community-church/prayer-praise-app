import { fromJS } from 'immutable';
import {
  CHANGE_PRAYER_TEXT,
} from './constants';

const initialState = fromJS({
  prayerText: '',
  loading: false,
  error: null
});

function prayerFormReducer(state = initialState, action) {
  switch (action.type) {

    case CHANGE_PRAYER_TEXT:
      return state
        .set('prayerText', action.payload);

    default:
      return state;
  }
}

export default prayerFormReducer;
