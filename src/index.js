import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import HotApp from './hot';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HotApp />
  </Provider>,
  document.getElementById('root'),
);
