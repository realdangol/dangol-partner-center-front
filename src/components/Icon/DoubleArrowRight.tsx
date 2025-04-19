import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const DoubleArrowRight = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20L20 12L12 4M6 20L14 12L6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default DoubleArrowRight;
