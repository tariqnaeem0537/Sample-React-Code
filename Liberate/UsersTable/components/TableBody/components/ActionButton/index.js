import React, {useState} from 'react';
import {object} from 'prop-types';
import {AngleUp, AngleDown} from 'components/Icons';
import useSidePane from 'utils/hooks/html/useSidePane';
import SidePaneContent from 'components/Liberate/UsersTable/components/SidePane';
import LoadingCell from '../LoadingCell';
import styles from './styles.module.scss';

export default function ActionButton({user = {}}) {
  const [showDropDown, setShowDropDown] = useState(false);
  const {SidePane, toggle} = useSidePane();
  const isPending = user.status.code === 'pending';

  const Icon = () => (showDropDown ? <AngleUp /> : <AngleDown />);

  function handleClick() {
    if (!isPending) {
      return toggle();
    }
    return setShowDropDown(!showDropDown);
  }

  function handlePendingAction() {
    toggle();
    setShowDropDown(false);
  }

  if (user.status.code === 'na') {
    return <LoadingCell />;
  }
  return (
    <>
      <button
        onClick={handleClick}
        className={`${styles.actionBtn} ${isPending && styles.optionsBtn}`}
      >
        <span>{user.status.actionText}</span>
        {isPending && <Icon />}
      </button>
      {showDropDown && (
        <>
          <div className={styles.dropdownBtns}>
            <button onClick={handlePendingAction} className={styles.resendBtn}>
              Re-send invitation
            </button>
            <div className={styles.hr} />
            <button onClick={handlePendingAction} className={styles.revokeBtn}>
              Revoke invitation
            </button>
          </div>
        </>
      )}
      <SidePane>
        <SidePaneContent user={user} toggle={toggle} />
      </SidePane>
    </>
  );
}

ActionButton.propTypes = {
  user: object,
};
