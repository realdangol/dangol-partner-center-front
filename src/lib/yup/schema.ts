import * as yup from 'yup';

import { emailRegex, passwordRegex } from '@/constants/regex';

export const emailSchema = yup
  .string()
  .required('이메일을 입력해주세요.')
  .matches(emailRegex, '올바른 이메일을 입력해주세요.');

export const passwordSchema = yup
  .string()
  .required('비밀번호를 입력해주세요.')
  .matches(passwordRegex, '영문 대소문자와 숫자를 포함한 8~16자여야 합니다.');

export const businessRegistrationSchema = yup
  .string()
  .matches(/^\d{10}$/, '사업자등록번호는 숫자 10자리여야 합니다.')
  .required('사업자 번호를 입력해주세요.');

export const companyNameSchema = yup.string().required('사업자명을 입력해주세요.');
