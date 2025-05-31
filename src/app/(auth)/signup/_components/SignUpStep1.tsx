'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button, CheckBox, Divider } from '@/components';
import preventSubmitByEnter from '@/utils/preventSubmitByEnter';

import { useSignUp } from '../_hooks';
import SignUpAgreeCheckBox from './SignUpAgreeCheckBox';

export type SignUpStep1FormValues = {
  termsAgreed: boolean;
  privacyAgreed: boolean;
  smsAgreed: boolean;
  marketingAgreed: boolean;
};

const schema = yup.object().shape({
  termsAgreed: yup.boolean().oneOf([true]).required(),
  privacyAgreed: yup.boolean().oneOf([true]).required(),
  smsAgreed: yup.boolean().oneOf([true]).required(),
  marketingAgreed: yup.boolean().required(),
});

const SignUpStep1 = () => {
  const { setSignUpFormValues, goNextStep } = useSignUp();
  const {
    control,
    formState: { isValid },
    handleSubmit,
    watch,
    setValue,
  } = useForm<SignUpStep1FormValues>({
    defaultValues: {
      termsAgreed: false,
      privacyAgreed: false,
      smsAgreed: false,
      marketingAgreed: false,
    },
    resolver: yupResolver(schema),
  });
  const allAgreed = watch('termsAgreed') && watch('privacyAgreed') && watch('smsAgreed');
  const requiredAgreeList = [
    {
      label: (
        <>
          (필수) <span className="text-neutral-600">서비스 이용약관동의</span>
        </>
      ),
      name: 'termsAgreed',
    },
    {
      label: (
        <>
          (필수) <span className="text-neutral-600">개인정보수집 및 이용동의</span>
        </>
      ),
      name: 'privacyAgreed',
    },
    {
      label: (
        <>
          (필수) <span className="text-neutral-600">문자서비스 이용약관 동의</span>
        </>
      ),
      name: 'smsAgreed',
    },
  ];

  const handleToggleAllAgree = () => {
    const nextValue = !allAgreed;

    setValue('termsAgreed', nextValue, {
      shouldValidate: true,
    });
    setValue('privacyAgreed', nextValue, {
      shouldValidate: true,
    });
    setValue('smsAgreed', nextValue, {
      shouldValidate: true,
    });
  };

  const onValid: SubmitHandler<SignUpStep1FormValues> = (data) => {
    setSignUpFormValues(data);
    goNextStep();
  };

  return (
    <form onKeyDown={preventSubmitByEnter} onSubmit={handleSubmit(onValid)}>
      <h2 className="typo-h2 text-neutral-800">찐단골 관리자 약관동의</h2>
      <div className="my-4 flex flex-col gap-2.5 py-8">
        <div className="flex items-center rounded-[4px] border border-neutral-300 p-4">
          <CheckBox label="전체동의" checked={allAgreed} onChange={handleToggleAllAgree} />
        </div>
        <div className="flex flex-col gap-8 p-4 pb-8">
          {requiredAgreeList.map((requiredAgree) => (
            <SignUpAgreeCheckBox
              key={requiredAgree.name}
              label={requiredAgree.label}
              control={control}
              name={requiredAgree.name as keyof SignUpStep1FormValues}
            />
          ))}
        </div>
        <Divider color={'neutral-200'} />
        <div className="px-4">
          <SignUpAgreeCheckBox
            label={<span className="text-neutral-600">(선택) 광고성 정보 수신 동의</span>}
            control={control}
            name="marketingAgreed"
          />
        </div>
      </div>
      <Button className="w-full rounded-[4px]" disabled={!isValid}>
        다음
      </Button>
    </form>
  );
};

export default SignUpStep1;
