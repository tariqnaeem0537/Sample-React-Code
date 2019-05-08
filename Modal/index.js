import React from 'react';
import ReactDOM from 'react-dom';
import DivButton from 'components/Buttons/Div';
import useLockBodyScroll from 'utils/hooks/html/useLockBodyScroll';
import styles from './styles.module.scss';

const modalRoot = document.getElementById('modal-root');

export default function Modal({
  el,
  onClose,
  children,
  className = '',
  childClassName = '',
}) {
  useLockBodyScroll();

  return ReactDOM.createPortal(
    <DivButton
      el={el}
      onClick={onClose}
      className={`${styles.container} ${className}`}
    >
      <div
        role="none"
        onClick={e => e.stopPropagation()}
        onKeyPress={e => e.stopPropagation()}
        className={`${styles.child} ${childClassName}`}
      >
        {children}
      </div>
    </DivButton>,
    modalRoot,
  );
}
