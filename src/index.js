import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './redux/configureStore';

import './index.styl';

const store = configureStore();

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>
		</AppContainer>,
		document.getElementById('root'),
	);
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		render(App);
	});
}