import './globals.css';

import React, { Suspense } from 'react';

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
          <Suspense>
            <DialogProvider>
              {children}
              <Dialog />
            </DialogProvider>
          </Suspense>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
