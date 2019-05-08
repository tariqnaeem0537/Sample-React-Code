import React, {useContext} from 'react';
import {LoggedInUserCtx} from 'utils/consts';
import SiteNavItems from './components/SiteNavItems';
import UsernameNavItem from './components/UsernameNavItem';
import EnterpriseNavItem from './components/EnterpriseNavItem';
import styles from './styles.module.scss';

export default function Banner() {
  const {user} = useContext(LoggedInUserCtx);

  if (!user || !user.tenancyId) {
    return null;
  }

  return (
    <header>
      <div className={styles.container}>
        <nav>
          <div className={styles.navLeft}>
            <EnterpriseNavItem />
            <SiteNavItems />
          </div>
          <div className={styles.navRight}>
            <UsernameNavItem />
          </div>
        </nav>
      </div>
    </header>
  );
}
