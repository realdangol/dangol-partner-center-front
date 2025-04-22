'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import { dangolPathname } from '@/constants/pathname';

const AuthPageTitle = () => {
  const pathname = usePathname() as keyof typeof pathnameTitleMap;

  const pathnameTitleMap = {
    [dangolPathname.login]: '관리자 로그인',
    [dangolPathname.signUp]: '회원가입',
  };

  return <h1 className="typo-h text-neutral-800">{pathnameTitleMap[pathname]}</h1>;
};

export default AuthPageTitle;
