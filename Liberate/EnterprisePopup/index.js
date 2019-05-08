import React, {useRef} from 'react';
import {oneOfType, func, oneOf} from 'prop-types';
import useOnEscButtonPress from 'utils/hooks/html/useOnEscButtonPress';
import Modal from 'components/Modal';
import CloseModal from 'components/Liberate/CloseModalButton';
import Form from './Form';
import styles from './styles.module.scss';

export default function EnterprisePopup({
  onClose = null,
  onSuccess = () => {},
}) {
  const modalRef = useRef();
  useOnEscButtonPress(modalRef, onClose || (() => {}));

  function handleSuccess() {
    onClose();
    onSuccess();
  }

  return (
    <Modal el={modalRef} onClose={onClose} childClassName={styles.popup}>
      {onClose && <CloseModal onClick={onClose} />}

      <Form onSuccess={handleSuccess} title="Find your Enterprise ID" />
    </Modal>
  );
}

EnterprisePopup.propTypes = {
  onClose: oneOfType([oneOf([null]), func]),
  onSuccess: func,
};
