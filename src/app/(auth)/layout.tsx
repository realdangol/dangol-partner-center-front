import type { PropsWithChildren } from 'react';
import React from 'react';

import withGuest from '@/hoc/withGuest';
import Logo from '@/public/images/logo.png';

import { AuthPageTitle } from './_components';

const AuthPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute left-1/2 top-1/2 w-full max-w-[614px] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl border border-neutral-300 px-8 py-16">
      <div className="flex flex-col items-center gap-4">
        <img src={Logo.src} alt="찐단골" />
        <AuthPageTitle />
      </div>
      {children}
    </div>
  );
};

export default withGuest(AuthPageLayout);
