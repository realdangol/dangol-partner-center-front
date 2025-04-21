'use client';

import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { FormEventHandler } from 'react';
import React, { useRef, useState } from 'react';

import { Button, Divider, Input } from '@/components';
import { dangolPathname } from '@/constants/pathname';
import { emailRegex, passwordRegex } from '@/constants/regex';
import { useLogin } from '@/services/auth/useAuthQuery';

const LoginPage = () => {
  const router = useRouter();
  const { mutateAsync: login, isPending } = useLogin();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const checkInputValidation = (email: string, password: string) => {
    if (!emailRegex.test(email)) {
      setError({ ...error, email: true });
      alert('이메일 형식에 안맞아요.');
      throw Error('Validation error');
    }

    if (!passwordRegex.test(password)) {
      setError({ ...error, password: true });
      alert('비밀번호 형식에 안맞아요.');
      throw Error('Validation error');
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (!emailInputRef.current || !passwordInputRef.current) return;

    try {
      checkInputValidation(emailInputRef.current.value, passwordInputRef.current.value);
      await login({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      router.replace(dangolPathname.home);
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.status) {
          case 404:
            alert('가입되지않은 유저에요.');
            break;
          default:
            alert('알 수 없는 에러가 발생했어요. 다시 시도해주세요.');
            break;
        }
      }
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            ref={emailInputRef}
            type="email"
            label="이메일"
            placeholder="이메일 입력해주세요."
          />
          <Input
            ref={passwordInputRef}
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
          />
          {/* 로그인 유지 체크박스 */}
        </div>
        <Button className="!h-14 !rounded" disabled={isPending}>
          로그인
        </Button>
      </form>
      <div className="mt-8 flex items-center justify-center gap-4 typo-body1-regular text-neutral-800">
        <Link href={dangolPathname.findEmail} prefetch={false}>
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
    </div>
  );
};

export default LoginPage;
