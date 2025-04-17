import './globals.css';

import React from 'react';

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
          {children}
          <div id="dialog"></div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
