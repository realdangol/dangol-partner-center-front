import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Vehicle = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_218_437)">
        <path
          d="M17 17.5C17 18.163 17.2634 18.7989 17.7322 19.2678C18.2011 19.7366 18.837 20 19.5 20C20.163 20 20.7989 19.7366 21.2678 19.2678C21.7366 18.7989 22 18.163 22 17.5C22 16.837 21.7366 16.2011 21.2678 15.7322C20.7989 15.2634 20.163 15 19.5 15C18.837 15 18.2011 15.2634 17.7322 15.7322C17.2634 16.2011 17 16.837 17 17.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.26667 16.5714V17.7143C6.26667 18.3205 6.50548 18.9019 6.93056 19.3305C7.35564 19.7592 7.93218 20 8.53333 20C9.13449 20 9.71103 19.7592 10.1361 19.3305C10.5612 18.9019 10.8 18.3205 10.8 17.7143V12H7.4C6.49826 12 5.63346 12.3612 4.99584 13.0042C4.35821 13.6472 4 14.5193 4 15.4286V16.5714H15.3333C15.7534 15.3476 16.5085 14.2687 17.5114 13.4597C18.5142 12.6507 19.7238 12.1446 21 12V6.28571C21 5.67951 20.7612 5.09812 20.3361 4.66947C19.911 4.24082 19.3345 4 18.7333 4H17.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 9H11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_218_437">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Vehicle;
