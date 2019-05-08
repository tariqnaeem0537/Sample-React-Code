import React from 'react';
import {func} from 'prop-types';
import {ArrowRight} from 'components/Icons';
import SpanButton from 'components/Buttons/Span';
import styles from './styles.module.scss';

export default function ResentButton({onClick}) {
  return (
    <SpanButton onClick={onClick} className={styles.container}>
      Resend invitation <ArrowRight />
    </SpanButton>
  );
}

ResentButton.propTypes = {
  onClick: func,
};
