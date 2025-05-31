import Link from 'next/link';
import React from 'react';

import { Divider } from '@/components';
import { dangolPathname } from '@/constants/pathname';

const AuthHelperLinks = () => {
  return (
    <div className="typo-body1-regular mt-8 flex items-center justify-center gap-4 text-neutral-800">
      <Link href={dangolPathname.findAccount} prefetch={false}>
        이메일 / 비밀번호 찾기
      </Link>
      <Divider
        orientation="vertical"
        style={{
          height: '12px',
          alignSelf: 'center',
        }}
      />
      <Link href={dangolPathname.signUp} prefetch={false}>
        회원가입
      </Link>
    </div>
  );
};

export default AuthHelperLinks;
