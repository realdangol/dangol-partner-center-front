import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Heart = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.45928 5.45534C1.51357 7.39579 1.51357 10.5419 3.45928 12.4824L11.2939 20.2958C11.6842 20.685 12.3158 20.685 12.7061 20.2958L20.5407 12.4824C22.4864 10.5419 22.4864 7.39579 20.5407 5.45534C18.595 3.51489 15.4404 3.51489 13.4947 5.45534L12 6.94599L10.5053 5.45534C8.5596 3.51489 5.40499 3.51489 3.45928 5.45534Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default Heart;
