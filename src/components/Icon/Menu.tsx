import React from 'react';

import withPolymorphicIcon from './withPolymorphicIcon';

const Menu = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
});

export default Menu;
