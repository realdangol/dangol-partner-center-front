import type { PropsWithChildren } from 'react';
import React from 'react';

import { Header, Sidebar } from './_components';

const AfterLoginLayout = ({ children }: PropsWithChildren) => {
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
