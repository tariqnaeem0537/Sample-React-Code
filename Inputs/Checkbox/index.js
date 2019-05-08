/* eslint-disable */
import React from 'react';
import {string, func} from 'prop-types';
import styles from './styles.module.scss';

export default function Checkbox({
  id = '',
  name = '',
  value = '',
  text = '',
  className = '',
  onChange = () => {},
}) {
  return (
    <span className={`${styles.container} ${className}`}>
      <input
        id={id}
        value={value}
        type="checkbox"
        className={styles.checkbox}
        onChange={onChange}
      />
      <label htmlFor={id}>{text}</label>
    </span>
  );
}

Checkbox.propTypes = {
  id: string.isRequired,
  name: string,
  value: string,
  text: string.isRequired,
  className: string,
  onChange: func,
};
