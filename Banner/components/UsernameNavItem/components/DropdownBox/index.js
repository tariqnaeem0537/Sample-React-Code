import React from 'react';
import {func} from 'prop-types';
import {CaretUp} from 'components/Icons';
import DivButton from 'components/Buttons/Div';
import Options from './components/Options';
import styles from './styles.module.scss';

export default function DropdownBox({onClickOutside = () => {}}) {
  return (
    <>
      <DivButton onClick={onClickOutside} className={styles.outerWorld}>
        <div className={styles.dropdown}>
          <CaretUp size="lg" />
          <Options />
        </div>
      </DivButton>
    </>
  );
}

DropdownBox.propTypes = {
  onClickOutside: func,
};
