import React from 'react';
import styles from './styles.module.scss';

export default function TermsAndConditions() {
  return (
    <>
      <span className={styles.title}>Terms & Conditions summary</span>
      <ol className={styles.list}>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        <li>Rerum quam dolore animi voluptatum architecto quas</li>
        <li>Totam illum earum, beatae et fuga, doloremque</li>
        <li>
          Totam illum earum, beatae et fuga, doloremque obcaecati, dolorem
          delectus
        </li>
      </ol>

      <p className={styles.tclink}>View full Terms & Conditions here.</p>
    </>
  );
}
