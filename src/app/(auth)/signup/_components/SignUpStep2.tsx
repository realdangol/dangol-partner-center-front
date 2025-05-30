import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import type { Address } from 'react-daum-postcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import type { Resolver, SubmitHandler } from 'react-hook-form';
import { useController, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button, FileUpload, TextField } from '@/components';
import { CheckLine } from '@/components/Icon';
import { emailRegex, passwordRegex, phoneRegex } from '@/constants/regex';
import preventSubmitByEnter from '@/utils/preventSubmitByEnter';

import { AuthSubmitButton } from '../../_components';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요.')
    .matches(emailRegex, '올바른 이메일을 입력해주세요.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(passwordRegex, '영문 대소문자와 숫자를 포함한 8~16자여야 합니다.'),
  passwordConfirm: yup
    .string()
    .required('비밀번호 확인을 입력해주세요.')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
  phone: yup
    .string()
    .required('휴대폰 번호를 입력해주세요.')
    .matches(phoneRegex, '휴대폰 번호 형식이 올바르지 않습니다.'),
  storeName: yup.string().required('매장명을 입력해주세요.'),
  address: yup.string().required('주소를 입력해주세요.'),
  detailedAddress: yup.string().notRequired(),
  companyName: yup.string().required('사업자등록 상 사업자명를 입력해주세요.'),
  businessRegistrationNumber: yup.string().required('사업자 번호를 입력해주세요.'),
  storePhone: yup.string().required('매장 전화번호를 입력해주세요.'),
  businessRegistration: yup.string().required('사업자 등록증을 등록해주세요.'),
});

type SignUpStep2FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  storeName: string;
  address: string;
  detailedAddress: string;
  companyName: string;
  businessRegistrationNumber: string;
  storePhone: string;
  businessRegistration: string;
};

const SignUpStep2 = () => {
  const {
    control,
    formState: { errors },
    watch,
    register,
    setValue,
    handleSubmit,
    resetField,
  } = useForm<SignUpStep2FormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      phone: '',
      storeName: '',
      address: '',
      detailedAddress: '',
      companyName: '',
      storePhone: '',
      businessRegistration: '',
    },
    resolver: yupResolver(schema) as Resolver<SignUpStep2FormValues>,
  });
  const { field } = useController({
    control,
    name: 'businessRegistration',
  });
  const values = watch();
  const isAllFilled = Object.entries(values).every(([field, value]) => {
    if (field === 'detailedAddress') return true;
    return typeof value === 'string' ? !!value.trim() : !!value;
  });

  const checkPasswordRules = () => {
    const password = watch('password');

    return {
      lengthValid: password.length >= 8 && password.length <= 16,
      hasLetter: /[A-Za-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*()_\-+=]/.test(password),
    };
  };
  const checkPasswordRulesResult = checkPasswordRules();

  const openDaumPostcodeModal = useDaumPostcodePopup();

  const handleComplete = (address: Address) => {
    setValue('address', address.address, { shouldValidate: true });
  };

  const handleSeacthAddressClick = () => {
    openDaumPostcodeModal({
      popupTitle: '주소 검색',
      onComplete: handleComplete,
    });
  };

  const onValid: SubmitHandler<SignUpStep2FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onValid)} onKeyDown={preventSubmitByEnter}>
      <div className="flex flex-col gap-8">
        <TextField
          {...register('email')}
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          error={!!errors.email}
          helperText={{
            value: errors.email?.message as string,
          }}
        />
        <div className="flex flex-col gap-2">
          <TextField
            {...register('password')}
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            error={!!errors.password}
            helperText={{
              value: errors.password?.message as string,
            }}
          />
          <div className="flex gap-3">
            <span
              className={`typo-body3-regular flex gap-0.5 ${checkPasswordRulesResult.lengthValid ? 'text-success-600' : 'text-neutral-300'}`}
            >
              8~16자 이내
              <CheckLine size="16" />
            </span>
            <span
              className={`typo-body3-regular flex gap-0.5 ${checkPasswordRulesResult.hasLetter ? 'text-success-600' : 'text-neutral-300'}`}
            >
              영문 포함
              <CheckLine size="16" />
            </span>
            <span
              className={`typo-body3-regular flex gap-0.5 ${checkPasswordRulesResult.hasNumber ? 'text-success-600' : 'text-neutral-300'}`}
            >
              숫자 포함
              <CheckLine size="16" />
            </span>
            <span
              className={`typo-body3-regular flex gap-0.5 ${checkPasswordRulesResult.hasSpecialChar ? 'text-success-600' : 'text-neutral-300'}`}
            >
              특수문자
              <CheckLine size="16" />
            </span>
          </div>
        </div>
        <TextField
          {...register('passwordConfirm')}
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요."
          error={!!errors.passwordConfirm}
          helperText={{
            value: errors.passwordConfirm?.message as string,
          }}
        />
        <TextField
          {...register('phone')}
          type="tel"
          label="휴대폰번호"
          placeholder="휴대폰번호를 입력해주세요."
          error={!!errors.phone}
          helperText={{
            value: errors.phone?.message as string,
          }}
        />
        <TextField
          {...register('storeName')}
          label="상호 명"
          placeholder="매장명을 입력해주세요."
          error={!!errors.storeName}
          helperText={{
            value: errors.storeName?.message as string,
          }}
        />
        <div className="flex flex-col gap-1">
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <TextField
                {...register('address')}
                label="매장 주소"
                placeholder="운영 매장 주소를 입력해주세요."
                readOnly
                error={!!errors.address}
                helperText={{
                  value: errors.address?.message as string,
                }}
              />
            </div>
            <Button type="button" variant="outlinePrimary" onClick={handleSeacthAddressClick}>
              주소 검색
            </Button>
          </div>
          <TextField {...register('detailedAddress')} placeholder="상세주소를 입력해주세요." />
        </div>
        <TextField
          {...register('companyName')}
          label="사업자명"
          placeholder="사업자등록 상 사업자명를 입력해주세요."
          error={!!errors.companyName}
          helperText={{
            value: errors.companyName?.message as string,
          }}
        />
        <TextField
          {...register('businessRegistrationNumber')}
          type="tel"
          label="상호 명"
          placeholder="사업자등록 상 사업자번호를 입력해주세요."
          error={!!errors.businessRegistrationNumber}
          helperText={{
            value: errors.businessRegistrationNumber?.message as string,
          }}
        />
        <TextField
          {...register('storePhone')}
          type="tel"
          label="매장 전화번호"
          placeholder="매장 전화번호를 입력해주세요."
          error={!!errors.storePhone}
          helperText={{
            value: errors.storePhone?.message as string,
          }}
        />
        <FileUpload
          label="사업자 등록증"
          accept="image/jpeg,application/pdf"
          placeholder="JPG 또는 PDF 형식의 2MB 이내 파일"
          maxSizeMB={2}
          onClear={() => resetField('businessRegistration')}
          onFileSelect={field.onChange}
        />
        <AuthSubmitButton disabled={!isAllFilled}>회원가입</AuthSubmitButton>
      </div>
    </form>
  );
};

export default SignUpStep2;
