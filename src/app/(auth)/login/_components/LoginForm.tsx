'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import type { ChangeEventHandler } from 'react';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CheckBox, TextField } from '@/components';
import useDialog from '@/components/Dialog/useDialog';
import { errorCode } from '@/constants/error';
import { dangolPathname } from '@/constants/pathname';
import { emailSchema, passwordSchema } from '@/lib/yup/schema';
import { useLogin } from '@/services/auth/useAuthQuery';

import { AuthSubmitButton } from '../../_components';
import LoginFailModal from './LoginFailModal';

type LoginFormValues = {
  email: string;
  password: string;
};

const loginSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

const LoginForm = () => {
  const { openDialog } = useDialog();
  const router = useRouter();
  const { mutateAsync: login, isPending } = useLogin();
  const [keepLogin, setKeepLogin] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = () => {
    clearErrors();
    setSubmitButtonDisabled(!getValues('email') || !getValues('password'));
  };

  const onValid: SubmitHandler<LoginFormValues> = async ({ email, password }) => {
    try {
      await login({
        email,
        password,
      });
      // 로그인 후 처리 작업 추가 필요
      router.replace(dangolPathname.dashboard);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        switch (e.status) {
          case errorCode.Login.UserNotFound:
            setError('email', {
              message: '가입되지 않은 계정입니다.',
            });
            break;
          case errorCode.Login.PasswordMismatch:
            openDialog(<LoginFailModal failType="NotFound" />);
            break;
          case errorCode.Login.AccountRestriction:
            openDialog(<LoginFailModal failType="AccountRestriction" />);
            break;
          default:
            openDialog(<LoginFailModal failType="Unknown" />);
            break;
        }
      }
    }
  };

  return (
    <form className="flex flex-col gap-12" onSubmit={handleSubmit(onValid)}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <TextField
            {...register('email', {
              onChange: handleChange,
            })}
            type="email"
            label="이메일"
            placeholder="이메일 입력해주세요."
            helperText={{
              value: errors.email?.message as string,
            }}
            error={!!errors?.email}
          />
          <TextField
            {...register('password', {
              onChange: handleChange,
            })}
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            helperText={{
              value: errors.password?.message as string,
            }}
            error={!!errors.password}
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
