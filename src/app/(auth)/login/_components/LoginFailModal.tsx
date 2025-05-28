'use client';

import React from 'react';

import { Button } from '@/components';
import useDialog from '@/components/Dialog/useDialog';

type LoginFailType = 'NotFound' | 'AccountRestriction' | 'Unknown';
type Props = {
  failType: LoginFailType;
};

const LoginFailModal = ({ failType }: Props) => {
  const { closeDialog } = useDialog();
  const description = {
    NotFound: (
      <>
        없는 이메일이거나 비밀번호가 일치하지 않습니다
        <br />
        (5회 불일치시 해당 계정 접근이 제한됩니다)
      </>
    ),
    AccountRestriction: (
      <>
        해당 계정은 보안적인 문제로 인해 일시 잠금 처리 되었습니다.
        <br />
        고객센터로 문의해주세요
      </>
    ),
    Unknown: (
      <>
        오류가 발생하였습니다.
        <br />
        다시 시도 후 고객센터로 문의해주세요.
      </>
    ),
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="typo-h1 text-neutral-800">로그인 실패</h2>
        </div>
        <p>{description[failType]}</p>
      </div>
      <Button className="w-[160px] self-center" onClick={() => closeDialog()}>
        확인
      </Button>
    </div>
  );
};

export default LoginFailModal;
