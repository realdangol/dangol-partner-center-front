import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Eye = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20C15.6076 20 18.9699 17.9891 21.3102 14.5088C22.2299 13.1456 22.2299 10.8544 21.3102 9.49124C18.9699 6.01088 15.6076 4 12 4C8.39244 4 5.03015 6.01088 2.68983 9.49124C1.77006 10.8544 1.77006 13.1456 2.68983 14.5088C5.03015 17.9891 8.39244 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default Eye;
