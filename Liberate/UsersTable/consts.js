import React from 'react';

export const UsersTableCtx = React.createContext();

export const initState = {
  order: 'asc',
  orderBy: 'fullName',
  selected: [],
  page: 0,
  data: [],
  showFilters: false,
  filters: {
    service: [],
    construct: [],
  },
};

export const action = {
  sort: 'SORT',
  page: 'PAGE',
  select: 'SELECT',
  received_data: 'RECEIVED_DATA',
  select_all: 'SELECT_ALL',
  loading: 'IS_LOADING',
  error: 'ERROR_OCCURRED',
  update_user: 'UPDATE_USER',
  toggle_filters: 'TOGGLE_FILTERS_MENU',
  filter_service: 'SET_FILTER_SERVICE',
  filter_construct: 'SET_FILTER_CONSTRUCT',
};

export const filterOpts = {
  service: [
    {
      label: 'TIPT',
      value: 'TIPT',
    },
    {
      label: 'SIP Connect',
      value: 'SIP Connect',
    },
    {
      label: "'Blank'",
      value: '',
    },
  ],
  construct: [
    {
      label: 'Liberate (SIP Connect)',
      value: 'Liberate (SIP Connect)',
    },
    {
      label: 'Liberate (TIPT)',
      value: 'Liberate (TIPT)',
    },
    {
      label: 'Liberate Unified (TIPT)',
      value: 'Liberate Unified (TIPT)',
    },
    {
      label: 'Liberate Unified (SIP Connect)',
      value: 'Liberate Unified (SIP Connect)',
    },
    {
      label: 'Liberate Mobile',
      value: 'Liberate Mobile',
    },
  ],
};
