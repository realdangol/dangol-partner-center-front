'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';

type Props = {
  className?: string;
  onClose: () => void;
};

const Dialog = ({ className, children, onClose }: PropsWithChildren<Props>) => {
  return (
    <div className="fixed left-0 top-0 z-[1000] h-screen w-screen bg-black/40" onClick={onClose}>
      <div
        className={`absolute left-1/2 top-1/2 z-[100] w-full max-w-[320px] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white px-4 py-6 shadow-[0_1px_3px_#0000001F] sm:max-w-[480px] ${className}`}
        role="dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
