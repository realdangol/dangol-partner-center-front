'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';

type Props = {
  onClose: () => void;
};

const Dialog = ({ children, onClose }: PropsWithChildren<Props>) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-screen bg-black/40" onClick={onClose}>
      <div
        className="absolute left-1/2 top-1/2 z-[100] min-w-[320px] -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-white px-8 py-5 shadow-[0_1px_3px_#0000001F]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
