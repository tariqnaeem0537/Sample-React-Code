import React, {useContext} from 'react';
import ChevronIcon from 'components/ChevronIcon';
import SpanButton from 'components/Buttons/Span';
import {
  UsersTableCtx,
  filterOpts,
  action,
} from 'components/Liberate/UsersTable/consts';
import Option from './components/Option';
import styles from './styles.module.scss';

export default function TableFilters() {
  const {
    dispatch,
    state: {showFilters},
  } = useContext(UsersTableCtx);

  return (
    <div className={styles.container}>
      <SpanButton
        className={styles.title}
        onClick={() => dispatch(action.toggle_filters, !showFilters)}
      >
        Filters
        <ChevronIcon up={showFilters} />
      </SpanButton>

      <SpanButton
        onClick={() => dispatch(action.toggle_filters, false)}
        className={`${showFilters ? styles.outsideWordl : 'hidden'}`}
      />

      <div className={`${showFilters ? '' : 'hidden'} ${styles.filters}`}>
        <div>
          {filterOpts.service.map(f => (
            <Option key={f.label} data={f} type="service" />
          ))}
        </div>
        <div>
          {filterOpts.construct.map(f => (
            <Option key={f.label} data={f} type="construct" />
          ))}
        </div>
      </div>
    </div>
  );
}
