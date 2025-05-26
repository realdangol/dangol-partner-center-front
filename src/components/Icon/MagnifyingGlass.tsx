import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const MagnifyingGlass = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 17L22 21M19 11.5C19 16.1944 15.1944 20 10.5 20C5.80558 20 2 16.1944 2 11.5C2 6.80558 5.80558 3 10.5 3C15.1944 3 19 6.80558 19 11.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default MagnifyingGlass;
