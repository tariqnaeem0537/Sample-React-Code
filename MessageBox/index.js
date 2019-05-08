import React from 'react';
import {string, any} from 'prop-types';
import styles from './styles.module.scss';

const traffic = {
  green: '#8BC34A',
  orange: '#FF9800',
  red: '#D93923',
};

export default function MessageBox({
  className = '',
  content = null,
  type = '',
}) {
  const color = traffic[type] || traffic.red;
  return (
    <div style={{color}} className={`${styles.messageBox} ${className}`}>
      {content}
    </div>
  );
}

MessageBox.propTypes = {
  className: string,
  content: any,
  type: string,
};
