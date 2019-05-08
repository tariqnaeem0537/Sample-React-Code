import React from 'react';
import {func, string} from 'prop-types';
import CloseX from 'components/Icons/CloseX';
import styles from './styles.module.scss';

export default function CloseButton({onClick = () => {}, className = ''}) {
  return (
    <button
      aria-label="Close"
      onClick={onClick}
      className={`${styles.close} ${className}`}
    >
      <CloseX color="#0064D2" />
    </button>
  );
}

CloseButton.propTypes = {
  onClick: func,
  className: string,
};
