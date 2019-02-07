import React, { Component } from 'react';
import PropTypes from 'prop-types';

import react from './assets/react.png';
import './index.styl';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <div className={'AppContainer'}>
        <img src={react} alt="React" />
        <h3>React Edge Boilerplate</h3>
        <div className={'list'}>
          <div>This template includes:</div>
          <ul>
            <li>"normalize.css": "^8.0.1"</li>
            <li>"prop-types": "^15.6.2"</li>
            <li>"react": "^16.8.1"</li>
            <li>"react-dom": "^16.8.1"</li>
            <li>"react-redux": "^6.0.0"</li>
            <li>"redux": "^4.0.1"</li>
            <li>"redux-actions": "^2.6.4"</li>
            <li>"redux-logger": "^3.0.6"</li>
            <li>"redux-thunk": "^2.3.0"</li>
            <li>"type-to-reducer": "^1.1.0"</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
