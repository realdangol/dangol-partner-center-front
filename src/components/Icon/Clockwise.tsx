import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Clockwise = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8901 5.08C14.0201 4.82 13.0601 4.65 12.0001 4.65C7.21008 4.65 3.33008 8.53 3.33008 13.32C3.33008 18.12 7.21008 22 12.0001 22C16.7901 22 20.6701 18.12 20.6701 13.33C20.6701 11.55 20.1301 9.89 19.2101 8.51M13.2401 2L16.1301 5.32L12.7601 7.78"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default Clockwise;
