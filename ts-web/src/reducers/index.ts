import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import app from './app';

export interface IRootState {
  app: AppState;
}

export default combineReducers<IRootState>({
  app,
  route: routerReducer
});
