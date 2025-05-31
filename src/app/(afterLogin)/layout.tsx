import type { PropsWithChildren } from 'react';
import React from 'react';

// import { AuthProvider } from '@/components';
import { Header, Sidebar } from './_components';

type Props = {
  accessToken: string;
};

const AfterLoginLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Sidebar />
      <div className="w-[calc(100vw - 240px)] ml-[240px]">
        <Header />
        <main>
          <div className="px-10 py-[30px]">{children}</div>
        </main>
      </div>
    </>
  );
};

export default AfterLoginLayout;
