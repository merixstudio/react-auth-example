import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../../actions/auth';
import LoginForm from './components/LoginForm/LoginForm';
import Avatar from './components/Avatar/Avatar';

import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.formSubmit = this.formSubmit.bind(this);
    this.toggleHint = this.toggleHint.bind(this);

    this.state = {
      showHint: false,
    };
  }

  formSubmit(data) {
    return this.props.login(data);
  }

  toggleHint(event) {
    event.preventDefault();
    this.setState({ showHint: !this.state.showHint });
  }

  render() {
    return (
      <div className="login">
        <Avatar className="login__avatar" showHint={ this.state.showHint } />
        <LoginForm onSubmit={ this.formSubmit } onHintClick={ this.toggleHint }></LoginForm>
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
