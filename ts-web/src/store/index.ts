import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from '../middleware';

import { createReducer } from '../reducers';
import allSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(history: History): Store<any | undefined> {

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
    logger
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      // tslint:disable-next-line:no-string-literal
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
        // tslint:disable-next-line:no-string-literal
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : compose;

  const store = createStore(
    createReducer(),
    {},
    composeEnhancers(...enhancers)
  );

  allSagas.map((saga) => sagaMiddleware.run(saga));

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers');
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;

}
