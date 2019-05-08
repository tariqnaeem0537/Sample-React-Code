import React from 'react';
import {string} from 'prop-types';

export default function CloseX({color = '#FFF'}) {
  return (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 28 28"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M14.105 14.104l5.513 5.512-5.513-5.512-5.357 5.358 5.357-5.358zm0 0l5.31-5.31-5.31 5.31-5.497-5.496 5.497 5.496z"
          id="a"
        />
      </defs>
      <g
        transform="translate(-1015.000000, -348.000000)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <rect fill="#E9E9F4" x={0} y={0} width={1440} height={1150} />
        <rect
          fill="#000"
          fillRule="nonzero"
          opacity="0.402326"
          x={0}
          y={0}
          width={1440}
          height={1150}
        />
        <rect
          fill="#FFF"
          fillRule="nonzero"
          x={373}
          y={324}
          width={694}
          height={377}
        />
        <g transform="translate(1015.000000, 348.000000)">
          <use stroke="#000" strokeWidth="1.5" xlinkHref="#a" />
          <rect
            x={0}
            y={0}
            width={28}
            height={28}
            style={{mixBlendMode: 'screen'}}
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
}

CloseX.propTypes = {
  color: string,
};
