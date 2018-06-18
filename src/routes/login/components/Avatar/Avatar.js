import React from 'react';
import * as cx from 'classnames';

import './Avatar.css';

const Avatar = ({ className, showHint }) => (
  <div className={ cx('avatar', className ) }>
    <div className="avatar__clouds">
      <div className={ cx('avatar__cloud-1', { 'avatar__cloud--show': showHint }) } />
      <div className={ cx('avatar__cloud-2', { 'avatar__cloud--show': showHint }) } />
      <div className={ cx('avatar__cloud-3', { 'avatar__cloud--show': showHint }) }>
        <div>
          Email: <b>you@shall.not</b>
        </div>
        <div>
          Password: <b>pass</b>
        </div>
      </div>
    </div>
  </div>
);

export default Avatar;
