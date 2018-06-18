import React, { Component } from 'react';

import Login from './login/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <div className="app__login-wrapper">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
