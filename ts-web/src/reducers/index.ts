import { combineReducers } from 'redux-immutable';

import { appReducer } from './app';
import { routeReducer } from './route';

export function createReducer() {
  return combineReducers({
    app: appReducer,
    route: routeReducer
  });
}
