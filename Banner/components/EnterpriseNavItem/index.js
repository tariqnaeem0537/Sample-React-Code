import React, {useContext, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {animate} from 'utils';
import {LoggedInUserCtx, url} from 'utils/consts';
import Chevron from 'components/Icons/Chevron';
import SpanButton from 'components/Buttons/Span';
import EnterprisePopup from 'components/Liberate/EnterprisePopup';
import styles from './styles.module.scss';

export default function EnterpriseNavItem() {
  const ref = useRef();
  const [show, toggle] = useState(false);
  const {user} = useContext(LoggedInUserCtx);
  const {userType = '', tenancyName = '', tenancyId} = user;
  const isAdmin = userType === 'System';

  function showPopup() {
    if (isAdmin) {
      toggle(true);
    }
  }

  return (
    <>
      {show && (
        <EnterprisePopup
          onClose={() => toggle(false)}
          onSuccess={() => animate(ref, 'pulse')}
        />
      )}

      <Link to={url.landing} className={styles.logoName}>
        <span className={styles.telstraLogo} />
        <span className={styles.vrLine} />
        <span className={styles.liberate}> Liberate </span>
      </Link>

      <SpanButton
        onClick={showPopup}
        title={isAdmin ? 'Change enterprise' : ''}
        className={`${styles.enterpriseName} ${isAdmin && 'clickable'}`}
      >
        <span ref={ref}>
          {tenancyName} {tenancyId && <>({tenancyId})</>}
        </span>
        {isAdmin && <Chevron dir="down" />}
      </SpanButton>
    </>
  );
}
