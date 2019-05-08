import React, {useContext} from 'react';
import {bool} from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {AngleDown} from 'components/Icons';
import {handleSort} from 'utils/table';
import {UsersTableCtx, action} from 'components/Liberate/UsersTable/consts';

const cols = [
  {id: 'userId', label: 'User ID', hidden: true},
  {id: 'fullName', label: 'Name'},
  {id: 'phoneNumber', label: 'Fixed Number'},
  {id: 'mobileNumber', label: 'Mobile No.'},
  {id: 'canLiberate', label: 'Status'},
  {id: 'service', label: 'Service'},
  {id: 'construct', label: 'Construct'},
];

export default function TableHeader({isLoading = false}) {
  const {state, dispatch} = useContext(UsersTableCtx);
  const {data, selected, order, orderBy} = state;
  const rowCount = data.length;
  const numSelected = selected.length;

  function handleColSort(id) {
    dispatch(action.sort, handleSort(id, order, orderBy));
  }

  function handleSelectAll(e) {
    if (e.target.checked) {
      return dispatch(action.select_all, data.map(i => i.userId));
    }
    return dispatch(action.select_all, []);
  }

  const titles = cols.map(row => {
    const head = {head: row.hidden ? 'hidden' : 'col-title'};

    return (
      <TableCell
        key={row.id}
        align="left"
        classes={head}
        sortDirection={orderBy === row.id ? order : false}
      >
        <TableSortLabel
          direction={order}
          active={orderBy === row.id}
          IconComponent={AngleDown}
          onClick={() => handleColSort(row.id)}
        >
          {row.label}
        </TableSortLabel>
      </TableCell>
    );
  });

  return (
    <TableHead>
      <TableRow>
        {rowCount > 1 && (
          <TableCell padding="none">
            {!isLoading && (
              <Checkbox
                color="primary"
                onChange={handleSelectAll}
                checked={numSelected === rowCount}
                inputProps={{'aria-label': 'select all rows'}}
                indeterminate={numSelected > 0 && numSelected < rowCount}
              />
            )}
          </TableCell>
        )}
        {titles}
        <TableCell align="left" classes={{head: 'col-title'}}>
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

TableHeader.propTypes = {
  isLoading: bool,
};
