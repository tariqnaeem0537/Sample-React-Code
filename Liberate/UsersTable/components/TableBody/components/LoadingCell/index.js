import React from 'react';
import styles from './styles.module.scss';

export default function LoadingCell() {
  return <div className={styles.animatedBackground} />;
}

export function withLoadingCell(isLoading, component) {
  if (isLoading) {
    return <LoadingCell />;
  }
  return component;
}