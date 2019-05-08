import React, {useContext} from 'react';
import {number, bool} from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import {userTemplate} from 'utils/consts';
import {tableSort, handleSelect, getSorting} from 'utils/table';
import {UsersTableCtx, action} from 'components/Liberate/UsersTable/consts';
import ActionButton from './components/ActionButton';
import FullnameField from './components/FullnameField';
import {withLoadingCell} from './components/LoadingCell';
import {containsSelectedFilters} from '../../utils';

const row = {root: 'user-row'};

export default function TableContent({
  rowsPerPage = 20,
  isFetching = false,
  isLoading = false,
}) {
  const {state, dispatch} = useContext(UsersTableCtx);
  const {data, page, selected, order, orderBy, filters} = state;

  function handleSelectRow(id) {
    dispatch(action.select, handleSelect(id, selected));
  }

  let tableData = [];
  if (isLoading) {
    tableData = Array(5)
      .fill(userTemplate)
      .map((i, idx) => ({...i, userId: idx}));
  } else {
    tableData = data.filter(user => containsSelectedFilters(user, filters));
  }

  const rows = tableSort(tableData, getSorting(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map(r => {
      const isSelected = selected.includes(r.userId);

      return (
        <TableRow
          hover
          role="checkbox"
          tabIndex={-1}
          key={r.userId}
          selected={isSelected}
          aria-checked={isSelected}
          classes={row}
        >
          {tableData.length > 1 && (
            <TableCell padding="none" style={{width: '50px'}}>
              {!isLoading && (
                <Checkbox
                  color="primary"
                  checked={isSelected}
                  onChange={() => handleSelectRow(r.userId)}
                  inputProps={{'aria-label': `select user ${r.fullName}`}}
                />
              )}
            </TableCell>
          )}
          <TableCell>
            {withLoadingCell(isLoading, <FullnameField data={r} />)}
          </TableCell>
          <TableCell>{withLoadingCell(isLoading, r.phoneNumber)}</TableCell>
          <TableCell>
            {withLoadingCell(isLoading || isFetching, r.mobileNumber)}
          </TableCell>
          <TableCell>
            <span style={{color: r.status.color}}>
              {withLoadingCell(isLoading || isFetching, r.status.text)}
            </span>
          </TableCell>
          <TableCell style={{maxWidth: '75px'}}>
            {withLoadingCell(isLoading || isFetching, r.service)}
          </TableCell>
          <TableCell>
            {withLoadingCell(isLoading || isFetching, r.construct)}
          </TableCell>
          <TableCell>
            {withLoadingCell(isLoading, <ActionButton user={r} />)}
          </TableCell>
        </TableRow>
      );
    });

  return <TableBody>{rows}</TableBody>;
}

TableContent.propTypes = {
  rowsPerPage: number,
  isFetching: bool,
  isLoading: bool,
};
