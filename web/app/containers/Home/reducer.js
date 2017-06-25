import { fromJS } from 'immutable';
import {
  FETCH_TOKEN,
} from './constants';

const initialState = fromJS({
  jwtToken: null
});

function homeReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}

export default homeReducer;
