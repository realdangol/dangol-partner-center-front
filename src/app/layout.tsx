import './globals.css';

import React from 'react';

import { Dialog } from '@/components';
import { DialogProvider } from '@/components/Dialog/DialogProvider';
import ReactQueryProvider from '@/lib/react-query/ReactQueryProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <DialogProvider>
            {children}
            <Dialog />
          </DialogProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
