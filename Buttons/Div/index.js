import React from 'react';
import {func, any} from 'prop-types';

export default function ClickableDiv({
  onClick = () => {},
  el = null,
  children = null,
  ...props
}) {
  return (
    <div
      ref={el}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

ClickableDiv.propTypes = {
  onClick: func,
  el: any,
  children: any,
};

/**
Accessibility requirement: any clickable element that's not a <button /> or a <a/>
must have: role='button', tabIndex={}, onKeyPress (or any other key trigger)
*/
