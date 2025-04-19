import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Dots = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 5C13.5 4.175 12.825 3.5 12 3.5C11.175 3.5 10.5 4.175 10.5 5C10.5 5.825 11.175 6.5 12 6.5C12.825 6.5 13.5 5.825 13.5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 19C13.5 18.175 12.825 17.5 12 17.5C11.175 17.5 10.5 18.175 10.5 19C10.5 19.825 11.175 20.5 12 20.5C12.825 20.5 13.5 19.825 13.5 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 12C13.5 11.175 12.825 10.5 12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
});

export default Dots;
