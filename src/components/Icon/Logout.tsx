import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Logout = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.04336 12H21M21 12L17 7.99999M21 12L17 16M10 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default Logout;
