import type { PropsWithChildren } from 'react';
import React from 'react';

const SubTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="typo-h1 text-neutral-800">{children}</h2>;
};

export default SubTitle;
