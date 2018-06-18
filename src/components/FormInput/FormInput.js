import React from 'react';

import './FormInput.css';

const FormInput = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div className="form-input">
    <div className="form-input__container">
      <label className="form-input__label">{ label }</label>
      <input
        { ...input }
        placeholder={ placeholder }
        type={ type }
        className="form-input__input"
      />
    </div>
    {
      touched &&
      error &&
      <div className="form-input__error">{ error }</div>
    }
  </div>
);

export default FormInput;
