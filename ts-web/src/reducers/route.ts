import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const routeInitialState = fromJS({
  locationBeforeTransitions: null
});

export function routeReducer(state = routeInitialState, action) {
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
