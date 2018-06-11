import React from 'react';

const FormInput = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <label>{ label }</label>
    <div>
      <input { ...input } placeholder={ placeholder } type={ type } />
      {
        touched &&
        error &&
        <span>{ error }</span>
      }
    </div>
  </div>
);

export default FormInput;
