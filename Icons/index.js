/**
 * 1. Using fontawesome due to an issue with react-icons ☹️
 * https://github.com/react-icons/react-icons/issues/154
 * 2. importing each icon-module directly due to an issue with webpack 4 ¯\_(ツ)_/¯
 * https://fontawesome.com/how-to-use/with-the-api/other/tree-shaking#issues
 */
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as names from './names';

Object.keys(names).forEach(i => {
  module.exports[`${i.replace('fa', '')}`] = props => (
    <FontAwesomeIcon icon={names[i]} {...props} />
  );
});
