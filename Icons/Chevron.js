import React from 'react';
import {string, number} from 'prop-types';

export default function Chevron({color = '#414141', size = 24, dir = 'up'}) {
  const direction = {
    up: 270,
    down: 90,
    right: 360,
    left: 180,
  };

  return (
    <svg
      width={size}
      height={size + 1}
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M14.5606602,13.1213203 L9.56066017,18.1213203 L8.5,17.0606602 L13.5,12.0606602 L8.5,7.06066017 L9.56066017,6 L15.6213203,12.0606602 L14.5606602,13.1213203 Z"
          id="path-1"
        />
      </defs>
      <g id="Wires" fill="none" fillRule="evenodd">
        <g id="I00A-Users---General-error" transform="translate(-1260 -301)">
          <rect fill="#FFF" width="1440" height="1956" />
          <g id="Forms-/-Select-menu" transform="translate(1114 265)">
            <g id="Input-Container" transform="translate(0 36.848)">
              <rect
                id="Input-container"
                y="2.556"
                width="170"
                height="17.576"
              />
              <g id="↳Icon-Right" transform="translate(146)">
                <mask id="mask-2" fill="#fff">
                  <use xlinkHref="#path-1" />
                </mask>
                <use
                  id="Chevron-id"
                  fill={color}
                  transform={`rotate(${direction[dir]} 12.06 12.06)`}
                  xlinkHref="#path-1"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Chevron.propTypes = {
  dir: string,
  color: string,
  size: number,
};
