import React, {useEffect, useReducer} from 'react';
import {bool, array} from 'prop-types';
import Table from '@material-ui/core/Table';
import getInitState from 'utils/storage/getInitState';
import {LS_NAMES} from 'utils/storage/consts';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import TablePagination from './components/TablePagination';
import TableFilters from './components/Filters';
import reducer from './reduer';
import {action, initState, UsersTableCtx} from './consts';
import './styles.css';

export default function UsersTable({
  users = [],
  isFetching = false,
  isLoading = false,
}) {
  const [state, dispatcher] = useReducer(
    reducer,
    getInitState(initState, LS_NAMES.users),
  );
  const dispatch = (type, payload) => dispatcher({type, payload});

  useEffect(() => {
    // seesion
    // compare length
    // to dispatch or not dispatch
    dispatch(action.received_data, users);
  }, [users]);

  function handleFilterToggle(filters) {
    dispatch(action.change_filters, filters);
  }

  if (!state.data.length && !isLoading) {
    return <center>No records found!</center>;
  }
  return (
    <div className="result-table-container">
      <UsersTableCtx.Provider value={{dispatch, state}}>
        <TableFilters onFilterToggle={handleFilterToggle} />
        <Table aria-label="results table">
          <TableHeader isLoading={isLoading} />
          <TableBody isFetching={isFetching} isLoading={isLoading} />
        </Table>
        <TablePagination isLoading={isLoading} />
      </UsersTableCtx.Provider>
    </div>
  );
}

UsersTable.propTypes = {
  users: array,
  isFetching: bool,
  isLoading: bool,
};
