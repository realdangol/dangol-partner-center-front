'use client';

import { useEffect } from 'react';

import { dangolPathname } from '@/constants/pathname';

const LogoutPage = () => {
  useEffect(() => {
    fetch('/api/auth/token/invalidate', {
      method: 'POST',
    }).then(() => {
      window.location.href = dangolPathname.login;
    });
  }, []);

  return null;
};

export default LogoutPage;
