import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import SpanButton from 'components/Buttons/Span';
import {
  UserNavDropdownCtx,
  dropdownOpts,
} from 'components/Banner/components/UsernameNavItem/consts';
import styles from './styles.module.scss';

export default function Options() {
  const {selectOption} = useContext(UserNavDropdownCtx);

  function onSelect(e, value) {
    e.stopPropagation();
    selectOption(value);
  }

  return (
    <span className={styles.opt}>
      {dropdownOpts.map(opt => (
        <React.Fragment key={opt.value}>
          <SpanButton onClick={evt => onSelect(evt, opt.value)}>
            {opt.label}
          </SpanButton>
        </React.Fragment>
      ))}
      <hr />
      <Link to="/logout"> Logout </Link>
    </span>
  );
}
