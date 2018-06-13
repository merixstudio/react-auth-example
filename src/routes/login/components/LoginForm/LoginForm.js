import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FormInput from '../../../../components/FormInput/FormInput';
import { required, email } from '../../../../utils/validators';

let LoginForm = ({ error, handleSubmit, submitting, pristine, reset }) => {

  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name="email"
        label="Email"
        placeholder="dev@merixstudio.com"
        type="email"
        validate={ [required, email] }
        component={ FormInput }
      />
      <Field
        name="password"
        label="Password"
        type="password"
        validate={ required }
        component={ FormInput }
      />
      <div>
        <button type="submit" disabled={ submitting }>
          Submit
        </button>
        <button type="button" disabled={ pristine || submitting } onClick={ reset }>
          Clear Values
        </button>
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
