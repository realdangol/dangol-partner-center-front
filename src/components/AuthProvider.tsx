'use client';

import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { useUserStore } from '@/stores';

type Props = {
  accessToken: string;
};

export default function AuthProvider({ children, accessToken }: PropsWithChildren<Props>) {
  const setAccessToken = useUserStore((state) => state.setAccessToken);

  useEffect(() => {
    setAccessToken(accessToken);
  }, [accessToken]);

  return children;
}
