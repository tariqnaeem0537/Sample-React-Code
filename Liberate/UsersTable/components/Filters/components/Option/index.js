import React, {useContext} from 'react';
import {shape, string, oneOf} from 'prop-types';
import {Check} from 'components/Icons';
import SpanButton from 'components/Buttons/Span';
import {UsersTableCtx, action} from 'components/Liberate/UsersTable/consts';
import styles from './styles.module.scss';

export default function Option({data, type}) {
  const {state: {filters}, dispatch} = useContext(UsersTableCtx);
  const effect = filters[type].includes(data.value) ? styles.selected : '';

  function onOptionClick(payload) {
    dispatch(action[`filter_${type}`], payload);
  }

  return (
    <SpanButton
      className={`${styles.option} ${effect}`}
      onClick={() => onOptionClick(data.value)}
    >
      <Check /> <span>{data.label}</span>
    </SpanButton>
  );
}

Option.propTypes = {
  data: shape({
    label: string,
    value: string,
  }),
  type: oneOf(['service', 'construct']),
};