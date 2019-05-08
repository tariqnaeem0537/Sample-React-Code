import React from 'react';
import {string} from 'prop-types';
import styles from './styles.module.scss';

export default function InitialsCircle({fullname = '', className = ''}) {
  const [fname, lname] = fullname.split(' ');
  const initials = `${fname[0]}${lname ? lname[0] : fname[1]}`;

  return <div className={`${styles.circle} ${className}`}>{initials}</div>;
}

InitialsCircle.propTypes = {
  fullname: string,
  className: string,
};
