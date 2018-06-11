import React, { Component } from 'react';

import LoginForm from './components/LoginForm/LoginForm';

import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.formSubmit.bind(this);
  }

  formSubmit(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        login
        <LoginForm onSubmit={ this.formSubmit }></LoginForm>
      </div>
    );
  }
}

export default Login;
