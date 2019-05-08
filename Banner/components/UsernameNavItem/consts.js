import React from 'react';

export const UserNavDropdownCtx = React.createContext();

export const initState = {
  show: false,
  selected: '',
};

export const option = {
  terms: 'TERMS_AND_CONDITIONS',
  sms: 'CUSTOMISE_SMS',
};

export const dropdownOpts = [
  {label: "View T&C's", value: option.terms},
  {label: 'Customise SMS', value: option.sms},
];
