import React from 'react';
import Button from 'components/Buttons/Submit';
import styles from './styles.module.scss';

export default function CancelButton(props) {
  return (
    <Button type="button" text="Cancel" className={styles.cancel} {...props} />
  );
}
