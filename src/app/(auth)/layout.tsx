import type { PropsWithChildren } from 'react';
import React from 'react';

import Logo from '@/public/images/logo.png';

import { AuthPageTitle } from './_components';

const AuthPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[614px] w-full py-16 px-8 border border-neutral-300 rounded-2xl">
      <div className="flex flex-col items-center gap-4">
        <img src={Logo.src} alt="찐단골" />
        <AuthPageTitle />
      </div>
      {children}
    </div>
  );
};

export default AuthPageLayout;
