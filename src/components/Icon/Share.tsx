import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Share = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 10.5L15.5 6M7.5 13.5L15.5 18M8 12C8 13.3807 6.88071 14.5 5.5 14.5C4.11929 14.5 3 13.3807 3 12C3 10.6193 4.11929 9.5 5.5 9.5C6.88071 9.5 8 10.6193 8 12ZM20 4.5C20 5.88071 18.8807 7 17.5 7C16.1193 7 15 5.88071 15 4.5C15 3.11929 16.1193 2 17.5 2C18.8807 2 20 3.11929 20 4.5ZM20 19.5C20 18.1193 18.8807 17 17.5 17C16.1193 17 15 18.1193 15 19.5C15 20.8807 16.1193 22 17.5 22C18.8807 22 20 20.8807 20 19.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
});

export default Share;
