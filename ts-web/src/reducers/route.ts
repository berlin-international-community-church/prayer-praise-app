import { Record } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const istate = {
  locationBeforeTransitions: null
};

const Rec = Record(istate);
export const initialState = new Rec();

export function routeReducer(state = initialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      });

    default:
      return state;
  }
}
