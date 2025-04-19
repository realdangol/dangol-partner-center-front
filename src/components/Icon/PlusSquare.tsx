import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const PlusSquare = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12H17M12 17V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 7.86486V16.1351C21 19.0541 19.5 21 16 21H8C4.5 21 3 19.0541 3 16.1351V7.86486C3 4.94595 4.5 3 8 3H16C19.5 3 21 4.94595 21 7.86486Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default PlusSquare;
