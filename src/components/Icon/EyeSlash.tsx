import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const EyeSlash = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5299 9.47001L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C12.9899 8.42001 13.8799 8.82001 14.5299 9.47001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6.03419C16.2057 4.71795 14.1551 4 12.0327 4C8.41333 4 5.04005 6.07407 2.69209 9.66382C1.7693 11.0698 1.7693 13.433 2.69209 14.839C3.50208 16.0755 4.44537 17.1425 5.47068 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 19.2804C9.19416 19.7472 10.4617 20 11.7501 20C15.4478 20 18.8941 17.9773 21.2929 14.4765C22.2357 13.1053 22.2357 10.8006 21.2929 9.4295C20.9472 8.92382 20.5701 8.44733 20.1826 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5104 12.7C15.2504 14.11 14.1004 15.26 12.6904 15.52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47 14.53L4 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0003 4L14.5303 9.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default EyeSlash;
