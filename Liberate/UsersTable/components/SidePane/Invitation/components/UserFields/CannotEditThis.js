import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import {CaretUp} from 'components/Icons';
import styles from './styles.module.scss';

export default function CannotEditThis() {
  return (
    <span className={styles.cantEdit}>
      <Tooltip
        classes={{tooltip: styles.tooltip}}
        title={<Tip />}
        aria-label="Why can't I edit phone number tooltip"
      >
        <p>Why can't I edit this?</p>
      </Tooltip>
    </span>
  );
}

const Tip = () => (
  <div className={styles.tip}>
    <CaretUp />
    <p>
      The fixed work number can't be edited because it is a licensed and
      registered telephone number associated with the enterprise.
      <br />
      The number can be reassigned to a new user via the editable fields.
    </p>
  </div>
);
