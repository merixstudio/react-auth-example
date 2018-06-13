import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../../actions/auth';
import LoginForm from './components/LoginForm/LoginForm';

import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(data) {
    this.props.login(data);
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

const mapStateToProps = state => ({
  //isAccountActivating: authSelectors.isAccountActivating(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
