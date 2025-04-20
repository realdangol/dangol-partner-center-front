import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Pan = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5092 12.4737H9.22853C8.95723 12.4737 8.7373 12.7486 8.7373 13.0877C8.7373 15.8007 10.4967 18 12.6671 18H18.0706C20.241 18 22.0004 15.8007 22.0004 13.0877C22.0004 12.7486 21.7805 12.4737 21.5092 12.4737Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.0527 9.15786C13.8786 8.028 11.3321 5.86667 13.158 4.73682M15.3685 9.15786C17.1944 8.028 14.6479 5.86667 16.4738 4.73682M18.6843 9.15786C20.5101 8.028 17.9637 5.86667 19.7895 4.73682"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.73688 12.4737L6.52637 10.2632"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.4067 5.14351C1.94896 4.60125 2.82814 4.60125 3.3704 5.14351L6.11959 7.89271C6.66185 8.43497 6.66185 9.31416 6.11959 9.85642C5.57733 10.3987 4.69814 10.3987 4.15588 9.85642L1.4067 7.10723C0.864434 6.56496 0.864435 5.68578 1.4067 5.14351Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
});

export default Pan;
