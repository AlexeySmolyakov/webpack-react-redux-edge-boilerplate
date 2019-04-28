import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './index';

const logger = createLogger({ collapsed: true });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, logger),
    ),
  );

  if (module.hot) {
    module.hot.accept('./index', () => {
      const nextRootReducer = require('./index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
