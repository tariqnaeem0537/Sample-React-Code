import React from 'react';
import {func, any} from 'prop-types';

export default function ClickableSpan({
  onClick = () => {},
  children = null,
  ...props
}) {
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={onClick}
      {...props}
    >
      {children}
    </span>
  );
}

ClickableSpan.propTypes = {
  onClick: func,
  children: any,
};

/**
Accessibility requirement: any clickable element that's not a <button /> or a <a/>
must have: role='button', tabIndex={}, onKeyPress (or any other key trigger)
*/
