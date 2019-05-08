import React from 'react';
import {NavLink} from 'react-router-dom';
import {isCurrentRoute} from 'utils';
import styles from './styles.module.scss';

const navItems = [
  {name: 'Dashboard', value: 'dashboard'},
  {name: 'Services', value: 'services'},
  {name: 'FAQ/Help', value: 'help'},
].map(({name, value}) => (
  <NavLink
    key={value}
    to={value}
    isActive={isCurrentRoute(value)}
    activeClassName={styles.active}
  >
    <span>{name}</span>
  </NavLink>
));

export default function SiteNavItems() {
  return <div className={styles.navItems}>{navItems}</div>;
}
