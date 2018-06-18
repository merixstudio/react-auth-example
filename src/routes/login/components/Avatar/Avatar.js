import React from 'react';
import * as cx from 'classnames';

import './Avatar.css';

const Avatar = props => (
  <div className={ cx('avatar', props.className ) }></div>
);

export default Avatar;
