/* eslint react/no-unescaped-entities: 0 */
import React, {useState} from 'react';
import {withSuspense} from 'utils';
import {QuestionCircle} from 'components/Icons';
import SpanButton from 'components/Buttons/Span';
import CloseButton from 'components/Liberate/CloseModalButton';
import styles from './styles.module.scss';

const Modal = withSuspense(React.lazy(() => import('components/Modal')));

export default function NeedSupport() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span className={styles.needSupport}>
        <QuestionCircle color="#0064D2" />
        <SpanButton onClick={() => setShowModal(true)}>
          Need Support?
        </SpanButton>
      </span>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className={styles.popupContainer}>
            <CloseButton onClick={() => setShowModal(false)} />
            <div className={styles.header}>Support</div>
            <p className={styles.subHeader}>Need help logging in?</p>
            <p className={styles.body}>
              If you have forgotten your username or password please <br />
              contact Telstra TIPT and SIP Connect support teams on <br />
              <span className={styles.phone}>1800 287 289.</span>
            </p>
            <p className={styles.footer}>We're available to help 24/7.</p>
          </div>
        </Modal>
      )}
    </>
  );
}
