import React from 'react';
import {shape, string, bool, oneOfType, oneOf, func} from 'prop-types';
import {Edit} from 'components/Icons';
import {getTimeField} from './utils';
import styles from './styles.module.scss';

export default function SidePaneHeader({
  data = {},
  onEdit = null,
  isEditing = false,
}) {
  const isEditable = Boolean(onEdit);
  const isActiveInMarket =
    data.status.code === 'active' &&
    data.construct.toLowerCase().includes('market');

  return (
    <>
      <div className={styles.fullname}>
        {data.fullName}
        {!isActiveInMarket && (isEditable && !isEditing) && (
          <Edit title="Edit user details" onClick={onEdit} />
        )}
      </div>

      <span className={styles.subtitle}>
        <span className={styles.status}>
          <span>
            Status:
            <span style={{color: data.status.color}}> {data.status.text}</span>
          </span>
          <span>Construct: {data.construct}</span>
        </span>

        {!data.canLiberate && !isActiveInMarket && (
          <span>{getTimeField(data)}</span>
        )}
      </span>
    </>
  );
}

SidePaneHeader.propTypes = {
  data: shape({
    fullName: string,
    construct: string,
    canLiberate: bool,
    status: shape({
      text: string,
      color: string,
      code: string,
    }),
  }),
  onEdit: oneOfType([oneOf([null]), func]),
  isEditing: bool,
};
