import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Clip = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.58091 5.48917L4.85299 9.2127C2.38234 11.6804 2.38234 15.6814 4.85299 18.1492C7.32364 20.6169 11.3294 20.6169 13.8 18.1492L19.7647 12.1915C21.4118 10.5464 21.4118 7.87903 19.7647 6.23387C18.1176 4.58871 15.4471 4.58871 13.8 6.23387L7.83532 12.1915C7.01177 13.0141 7.01177 14.3478 7.83532 15.1704C8.65887 15.993 9.99411 15.993 10.8177 15.1704L16.0367 9.95742"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
});

export default Clip;
