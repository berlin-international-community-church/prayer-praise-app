import { combineReducers } from 'redux';

import { appReducer } from './app';
import { messagesReducer } from './messages';
import { myDataReducer } from './myData';
import { routeReducer } from './route';
import { sharedMessagesReducer } from './sharedMessages';

export function createReducer() {
  return combineReducers({
    app: appReducer,
    messages: messagesReducer,
    myData: myDataReducer,
    route: routeReducer,
    sharedMessages: sharedMessagesReducer
  });
}
