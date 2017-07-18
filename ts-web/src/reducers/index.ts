import { combineReducers } from 'redux-immutable';

import { appReducer } from './app';
import { messagesReducer } from './messages';
import { routeReducer } from './route';

export function createReducer() {
  return combineReducers({
    app: appReducer,
    messages: messagesReducer,
    route: routeReducer
  });
}
