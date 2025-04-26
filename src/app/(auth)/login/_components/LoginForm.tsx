'use client';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import type { ChangeEventHandler, FormEventHandler } from 'react';
import React, { useRef, useState } from 'react';

import { CheckBox, TextField } from '@/components';
import useDialog from '@/components/Dialog/useDialog';
import { UnknownErrorModal } from '@/components/Modal';
import { errorCode } from '@/constants/error';
import { dangolPathname } from '@/constants/pathname';
import { emailRegex, passwordRegex } from '@/constants/regex';
import { useLogin } from '@/services/auth/useAuthQuery';

import { AuthSubmitButton } from '../../_components';

const initialErrorMessage = {
  email: {
    value: false,
    message: '',
  },
  password: {
    value: false,
    message: '',
  },
};

const LoginForm = () => {
  const { openDialog } = useDialog();
  const router = useRouter();
  const { mutateAsync: login, isPending } = useLogin();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [keepLogin, setKeepLogin] = useState(false);
  const [error, setError] = useState(initialErrorMessage);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const clearErrors = () => {
    setError(initialErrorMessage);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = () => {
    if (!emailInputRef.current || !passwordInputRef.current) return;

    clearErrors();
    setSubmitButtonDisabled(!emailInputRef.current.value && !passwordInputRef.current.value);
  };

  const checkValidation = (email: string, password: string) => {
    if (!emailRegex.test(email)) {
      setError({
        ...error,
        email: {
          value: true,
          message: '이메일 주소를 다시 확인해 주세요.',
        },
      });
      throw Error('Validation error');
    }

    if (!passwordRegex.test(password)) {
      setError({
        ...error,
        password: {
          value: true,
          message: '비밀번호를 다시 확인해 주세요.',
        },
      });
      throw Error('Validation error');
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (!emailInputRef.current || !passwordInputRef.current) return;

    try {
      checkValidation(emailInputRef.current.value, passwordInputRef.current.value);
      await login({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      router.replace(dangolPathname.home);
    } catch (e) {
      if (e instanceof AxiosError) {
        switch (e.status) {
          case errorCode.Login.UserNotFound:
            setError({
              ...error,
              email: {
                value: true,
                message: '가입되지 않은 계정입니다.',
              },
            });
            break;
          case errorCode.Login.PasswordMismatch:
            setError({
              ...error,
              email: {
                value: true,
                message: `비밀번호가 일치하지 않습니다. 5회 이상 틀린 경우 계정이 제한됩니다. (현재 ${e.response?.data.count}회 불일치)`,
              },
            });
            break;
          case errorCode.Login.AccountRestriction:
            // 제한된 계정 안내 메세지...
            break;
          default:
            openDialog(<UnknownErrorModal />, {
              withCloseButton: false,
            });
            break;
        }
      }
    }
  };

  return (
    <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <TextField
            ref={emailInputRef}
            type="email"
            label="이메일"
            placeholder="이메일 입력해주세요."
            helperText={{
              value: error.email.message,
            }}
            error={error.email.value}
            onChange={handleChange}
          />
          <TextField
            ref={passwordInputRef}
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            helperText={{
              value: error.password.message,
            }}
            error={error.password.value}
            onChange={handleChange}
          />
        </div>
        <CheckBox
          label="로그인 정보 저장"
          checked={keepLogin}
          onChange={() => setKeepLogin(!keepLogin)}
        />
      </div>
      <AuthSubmitButton disabled={submitButtonDisabled || isPending}>로그인</AuthSubmitButton>
    </form>
  );
};

export default LoginForm;
