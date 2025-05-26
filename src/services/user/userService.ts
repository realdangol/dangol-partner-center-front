import { APIPathname } from '@/constants/pathname';
import DangolAPIClient from '@/lib/axios/DangolAPIClient';

import type {
  CheckEmailDuplicateRequestBody,
  FindEmailRequestBody,
  FindEmailResponseBody,
  ResetPasswordRequestBody,
  SignUpRequestBody,
  SignUpResponseBody,
  VerifyEmailForPasswordResetRequestBody,
} from './types';

export async function signUp(body: SignUpRequestBody) {
  return await DangolAPIClient.post<SignUpResponseBody>(APIPathname.signUp, body);
}

export async function checkEmailDuplicate(body: CheckEmailDuplicateRequestBody) {
  return await DangolAPIClient.post<true>(APIPathname.checkEmailDuplicate, body);
}

export async function findEmail(body: FindEmailRequestBody) {
  return await DangolAPIClient.post<FindEmailResponseBody>(APIPathname.findEmail, body);
}

export async function verifyEmailForPasswordReset(body: VerifyEmailForPasswordResetRequestBody) {
  return await DangolAPIClient.post(APIPathname.verifyEmailForPasswordReset, body);
}

export async function resetPassword(body: ResetPasswordRequestBody) {
  return await DangolAPIClient.post(APIPathname.resetPassword, body);
}
