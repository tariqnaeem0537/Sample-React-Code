import React from 'react';
import {string, bool, func, number, object, any} from 'prop-types';
import Spinner from 'components/LoadingSpinner';
import styles from './styles.module.scss';

export default function TextInputField({
  id,
  el = null,
  defaultValue = '',
  required = false,
  type = 'text',
  spinnerSize = 18,
  spinnerProps = {},
  label = '',
  ariaLabel = '',
  placeholder = '',
  disabled = false,
  onChange = () => {},
  inputClassName = '',
  labelClassName = '',
  loading = false,
}) {
  const sProps = {
    oClassName: styles.spinner,
    ...spinnerProps,
  };

  return (
    <>
      <label htmlFor={id} className={`${styles.label} ${labelClassName}`}>
        {label}
      </label>
      <span className={styles.inputField}>
        <input
          id={id}
          ref={el}
          type={type}
          data-testid={id}
          required={required}
          disabled={disabled}
          onChange={onChange}
          aria-label={ariaLabel}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`${styles.input} ${inputClassName}`}
        />
        {loading && <Spinner size={spinnerSize} {...sProps} />}
      </span>
    </>
  );
}

TextInputField.propTypes = {
  id: string.isRequired,
  el: any,
  defaultValue: string,
  required: bool,
  label: string,
  type: string,
  spinnerSize: number,
  spinnerProps: object,
  ariaLabel: string,
  placeholder: string,
  disabled: bool,
  onChange: func,
  inputClassName: string,
  labelClassName: string,
  loading: bool,
};
