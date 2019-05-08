import React from 'react';
import {func, string} from 'prop-types';
import SpanButton from 'components/Buttons/Span';
import {ArrowLeft} from 'components/Icons';
import styles from './styles.module.scss';

export default function GoBack({
  onClick = ()=>{},
  className = '',
  text = 'GO BACK',
}) {
  return (
    <SpanButton
      onClick={onClick}
      className={`${styles.back} ${className}`}
    >
      <ArrowLeft color="#0064D2" />
      <span>{text}</span>
    </SpanButton>
  );
}

GoBack.propTypes = {
  onClick: func,
  className: string,
  text: string,
};