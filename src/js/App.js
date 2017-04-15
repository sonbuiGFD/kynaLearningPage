import React, { Component } from 'react';
import assets from './assets';
import '../css/App.css';

import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={assets.icons.logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/js/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
