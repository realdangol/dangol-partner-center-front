import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { TextField } from '@/components';
import { businessRegistrationNumberSchema, emailSchema } from '@/lib/yup/schema';
import handleOnlyNumberChange from '@/utils/handleOnlyNumberChange';
import preventSubmitByEnter from '@/utils/preventSubmitByEnter';

import { AuthSubmitButton } from '../../_components';

type FindPasswordFormValues = {
  email: string;
  businessRegistrationNumber: string;
};

const schema = yup.object().shape({
  email: emailSchema,
  businessRegistrationNumber: businessRegistrationNumberSchema,
});

const FindPasswordForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      email: '',
      businessRegistrationNumber: '',
    },
    resolver: yupResolver(schema),
  });
  const isAllFilled = Object.values(watch()).every((value) => !!value);

  const onValid = (data: FindPasswordFormValues) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(onValid)}
      onKeyDown={preventSubmitByEnter}
    >
      <div className="flex flex-col gap-6">
        <TextField
          {...register('email')}
          type="email"
          label="이메일"
          placeholder="이메일 입력해주세요."
          error={!!errors.email}
          helperText={{
            value: errors.email?.message as string,
          }}
        />
        <TextField
          {...register('businessRegistrationNumber', {
            onChange: handleOnlyNumberChange,
          })}
          type="tel"
          label="사업자번호"
          placeholder="사업자번호를 입력해주세요."
          error={!!errors.businessRegistrationNumber}
          helperText={{
            value: errors.businessRegistrationNumber?.message as string,
          }}
          maxLength={10}
        />
      </div>
      <AuthSubmitButton disabled={!isAllFilled}>비밀번호 찾기</AuthSubmitButton>
    </form>
  );
};

export default FindPasswordForm;
