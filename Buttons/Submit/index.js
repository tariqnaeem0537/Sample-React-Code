import React from 'react';
import {string, bool, any} from 'prop-types';
import styles from './styles.module.scss';

export default function SubmitButton({
  disabled = false,
  className = '',
  loading = false,
  text = '',
  ...btnProps
}) {
  return (
    <button
      disabled={disabled || loading}
      className={`${styles.button} ${className}`}
      {...btnProps}
    >
      <span className={`${loading ? styles.loading : ''}`}>{text}</span>
    </button>
  );
}

SubmitButton.propTypes = {
  disabled: bool,
  className: string,
  loading: bool,
  text: string,
  btnProps: any,
};
