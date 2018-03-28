import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import react from './assets/react.png';

class App extends Component {
	render () {
		return (
			<div className={'app-container'}>
				<img src={react} alt="React" />
				<h3>React Edge Boilerplate</h3>
			</div>
		);
	}
}

App.propTypes = {};
App.defaultProps = {};

export default hot(module)(App);
