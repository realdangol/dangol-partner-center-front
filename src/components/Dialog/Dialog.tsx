'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';

type Props = {
  onClose: () => void;
};

const Dialog = ({ children, onClose }: PropsWithChildren<Props>) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/40" onClick={onClose}>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] min-w-[320px] py-5 px-8 rounded-xl bg-white shadow-[0_1px_3px_#0000001F]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
