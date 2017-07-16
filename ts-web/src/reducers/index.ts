import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import { appReducer } from './app';

const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

export function createReducer() {
  return combineReducers({
    app: appReducer,
    route: routeReducer
  });
}
