import React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as cx from 'classnames';

import FormInput from '../../../../components/FormInput/FormInput';
import AppButton from '../../../../components/AppButton/AppButton';
import { required, email } from '../../../../utils/validators';

import './LoginForm.css';

let LoginForm = ({ className, error, handleSubmit, submitting }) => {

  return (
    <form className={ cx('login-form', className) } onSubmit={ handleSubmit }>
      <Field
        name="email"
        label="Email:"
        placeholder="dev@merixstudio.com"
        type="email"
        validate={ [required, email] }
        component={ FormInput }
      />
      <Field
        name="password"
        label="Password:"
        type="password"
        validate={ required }
        component={ FormInput }
      />
      <div className="login-form__buttons">
        <AppButton
          className="login-form__submit-button"
          type="submit"
          disabled={ submitting }
          text="Submit"
        />
        <AppButton className="login-form__hint-button" text="Hint" ghost="true" />
      </div>
      {
        error &&
        <div>
          { error }
        </div>
      }
    </form>
  )
};

LoginForm = reduxForm({
  form: 'login-form'
})(LoginForm);

export default LoginForm;
