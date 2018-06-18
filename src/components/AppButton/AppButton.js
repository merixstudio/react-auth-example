import React from 'react';
import * as cx from 'classnames';

import './AppButton.css';

const AppButton = props => (
  <button
    { ...props }
    className={ cx('app-button', { 'app-button--ghost': props.ghost }, props.className) }
  >
    { props.text }
  </button>
);

export default AppButton;
