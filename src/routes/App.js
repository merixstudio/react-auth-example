import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './login/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <Switch>
          <Redirect exact="true" from="/" to="/login" />
          <Route path="/login" component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
