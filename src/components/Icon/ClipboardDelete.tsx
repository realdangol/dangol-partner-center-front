import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const ClipboardDelete = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2859 2.57144H18.8573C19.3119 2.57144 19.748 2.75205 20.0695 3.07354C20.391 3.39504 20.5716 3.83107 20.5716 4.28573V21.4286C20.5716 21.8832 20.391 22.3193 20.0695 22.6408C19.748 22.9623 19.3119 23.1429 18.8573 23.1429H5.143C4.68834 23.1429 4.2523 22.9623 3.93081 22.6408C3.60932 22.3193 3.42871 21.8832 3.42871 21.4286V4.28573C3.42871 3.83107 3.60932 3.39504 3.93081 3.07354C4.2523 2.75205 4.68834 2.57144 5.143 2.57144H7.71442"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.572 0.857147H9.42913C8.48236 0.857147 7.71484 1.62466 7.71484 2.57143V3.42858C7.71484 4.37535 8.48236 5.14286 9.42913 5.14286H14.572C15.5188 5.14286 16.2863 4.37535 16.2863 3.42858V2.57143C16.2863 1.62466 15.5188 0.857147 14.572 0.857147Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.42871 11.1429L14.5716 16.2857"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5716 11.1429L9.42871 16.2857"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ClipboardDelete;
