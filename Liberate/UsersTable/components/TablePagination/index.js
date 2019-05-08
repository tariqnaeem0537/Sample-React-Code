/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import Chevron from 'components/Icons/Chevron';
import SpanButton from 'components/Buttons/Span';
import {UsersTableCtx, action} from 'components/Liberate/UsersTable/consts';
import {getPagination} from 'utils/table';
import {containsSelectedFilter} from '../../utils';
import styles from './styles.module.scss';

const rowsPerPage = 20;

export default function Pagination() {
  const {state, dispatch} = useContext(UsersTableCtx);
  const {data, page, filters} = state;
  const rows = filters.length
    ? data.filter(user => containsSelectedFilter(user, filters))
    : data;

  const paginator = getPagination(rows.length, page, rowsPerPage);
  const isFirstPage = page === 0;
  const isLastPage = page === paginator.pages[paginator.pages.length - 1];

  function handleNextPageClick() {
    if (!isLastPage) {
      dispatch(action.page, page + 1);
    }
  }
  function handlePreviousPageClick() {
    if (!isFirstPage) {
      dispatch(action.page, page - 1);
    }
  }
  function onPageClick(p) {
    dispatch(action.page, p);
  }

  if (rows.length <= rowsPerPage) {
    return null;
  }
  return (
    <div className={styles.container}>
      <span className={styles.count}>
        {getSequence(page + 1, rowsPerPage, rows.length)}
      </span>
      <SpanButton
        onClick={handlePreviousPageClick}
        className={`${styles.controller} ${isFirstPage ? styles.disabled : ''}`}
      >
        <Chevron dir="left" />
      </SpanButton>
      <span className={styles.pages}>
        {renderPagination(paginator, onPageClick)}
      </span>
      <SpanButton
        onClick={handleNextPageClick}
        className={`${styles.controller} ${isLastPage ? styles.disabled : ''}`}
      >
        <Chevron dir="right" />
      </SpanButton>
    </div>
  );
}

function renderPagination(paginator = {}, onPageClick) {
  const {currentPage, pages, middlePages} = paginator;
  const PageNo = ({no}) => (
    <SpanButton
      onClick={() => onPageClick(no)}
      className={`${styles.page} ${currentPage === no ? styles.current : ''}`}
    >
      {no + 1}
    </SpanButton>
  );

  if (pages.length < 10) {
    return pages.map(no => <PageNo key={no} no={no} />);
  }

  let hasRenderedDots = false;
  return pages.map((no, idx) => {
    let el = null;
    // first & last two pages or middle-pages
    if (idx < 2 || idx > pages.length - 3 || middlePages.includes(no)) {
      hasRenderedDots = false;
      el = <PageNo key={no} no={no} />;
    } else if (!hasRenderedDots) {
      hasRenderedDots = true;
      el = <span key={no}>...</span>;
    }
    return el;
  });
}

function getSequence(page, pageSize, ttl) {
  const upperLimit = page * pageSize;
  return `${upperLimit - pageSize + 1} - ${upperLimit} of ${ttl}`;
}
