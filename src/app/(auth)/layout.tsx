import type { PropsWithChildren } from 'react';
import React from 'react';

// import withGuest from '@/hoc/withGuest';
import Logo from '@/public/images/logo.png';

import { AuthPageTitle } from './_components';

const AuthPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="my-5 flex min-h-[calc(100dvh-40px)] items-center justify-center">
      <div className="w-full max-w-[614px] rounded-2xl border border-neutral-300 px-8 py-16">
        <div className="flex flex-col items-center gap-4">
          <img src={Logo.src} alt="찐단골" />
          <AuthPageTitle />
        </div>
        {children}
      </div>
    </div>
  );
};

// export default withGuest(AuthPageLayout);
export default AuthPageLayout;
