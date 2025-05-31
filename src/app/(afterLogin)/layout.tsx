import type { ReactNode } from 'react';
import React from 'react';

import { Header, Sidebar } from './_components';

type Props = {
  children: ReactNode;
  accessToken: string;
};

const AfterLoginLayout = ({ children }: Props) => {
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
