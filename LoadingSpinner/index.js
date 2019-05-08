import React from 'react';
import {number, string} from 'prop-types';
import styles from './styles.module.scss';

export default function Spinner({size = 16, oClassName = '', iClassName = ''}) {
  const oStyle = {
    height: `${size}px`,
    width: `${size}px`,
  };

  const iStyle = {
    height: `${size - 2}px`,
    width: `${size - 2}px`,
  };

  return (
    <div style={oStyle} className={`${styles.container} ${oClassName}`}>
      <div style={iStyle} className={`${styles.innerBox} ${iClassName}`} />
    </div>
  );
}

Spinner.propTypes = {
  size: number,
  oClassName: string,
  iClassName: string,
};
