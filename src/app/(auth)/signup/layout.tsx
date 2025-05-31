import type { PropsWithChildren } from 'react';
import React from 'react';

import { SignUpProvider } from './_components/SignUpProvider';

const SignUpPageLayout = ({ children }: PropsWithChildren) => {
  return <SignUpProvider>{children}</SignUpProvider>;
};

export default SignUpPageLayout;
