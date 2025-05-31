import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { TextField } from '@/components';
import { businessRegistrationNumberSchema, companyNameSchema } from '@/lib/yup/schema';
import handleOnlyNumberChange from '@/utils/handleOnlyNumberChange';
import preventSubmitByEnter from '@/utils/preventSubmitByEnter';

import { AuthSubmitButton } from '../../_components';

type FindEmailFormValues = {
  companyName: string;
  businessRegistrationNumber: string;
};

const schema = yup.object().shape({
  companyName: companyNameSchema,
  businessRegistrationNumber: businessRegistrationNumberSchema,
});

const FindEmailForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      companyName: '',
      businessRegistrationNumber: '',
    },
    resolver: yupResolver(schema),
  });
  const isAllFilled = Object.values(watch()).every((value) => !!value);

  const onValid = (data: FindEmailFormValues) => {
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
          {...register('companyName')}
          label="사업자명"
          placeholder="사업자명을 입력해주세요."
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
      <AuthSubmitButton disabled={!isAllFilled}>이메일 찾기</AuthSubmitButton>
    </form>
  );
};

export default FindEmailForm;
