import { combineReducers } from 'redux-immutable';

import { appReducer } from './app';
import { routeReducer } from './route';
import { messagesReducer } from './messages';

export function createReducer() {
  return combineReducers({
    app: appReducer,
    messages: messagesReducer,
    route: routeReducer
  });
}
