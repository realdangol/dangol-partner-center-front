import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Comment = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8.56588C2 5.49193 4.46243 3 7.5 3H16.5C19.5376 3 22 5.49193 22 8.56588V13.1318C22 15.9263 19.7614 18.1916 17 18.1916V19.986C17 20.8592 15.9805 21.3225 15.3356 20.7424L12.5 18.1916H7.5C4.46243 18.1916 2 15.6997 2 12.6258V8.56588Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
});

export default Comment;
