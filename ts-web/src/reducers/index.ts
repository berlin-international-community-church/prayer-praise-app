import { combineReducers } from 'redux-immutable';

import { appReducer } from './app';
import { messagesReducer } from './messages';
import { routeReducer } from './route';
import { sharedMessagesReducer } from './sharedMessages';

export function createReducer() {
  return combineReducers({
    app: appReducer,
    messages: messagesReducer,
    route: routeReducer,
    sharedMessages: sharedMessagesReducer
  });
}
