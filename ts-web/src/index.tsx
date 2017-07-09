import { createBrowserHistory, History } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import { configureStore } from './store';

import routeList from './routes';
import { initialState as initialApp } from './reducers/app';

const history  = createBrowserHistory();
const store = configureStore({
  app: initialApp
}, history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route {...routeList.base} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
