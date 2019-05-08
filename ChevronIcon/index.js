import React from 'react';
import {bool} from 'prop-types';
import Chevron from 'components/Icons/Chevron';

export default function ChevronIcon({up = false, ...props}) {
  const dir = up ? 'up' : 'down';

  return <Chevron dir={dir} {...props} />;
}

ChevronIcon.propTypes = {
  up: bool.isRequired,
};
