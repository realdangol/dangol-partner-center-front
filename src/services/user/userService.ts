import { APIPathname } from '@/constants/pathname';
import { dangolAPI } from '@/lib/axios';

type SignUpRequestBody = {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  isPersonalInfoCollectionAgree: boolean;
  isPersonalInfoUseAgree: boolean;
};

type CheckEmailDuplicateRequestBody = {
  email: string;
};

type FindEmailRequestBody = {
  name: string;
  phoneNumber: string;
};

type VerifyEmailForPasswordResetRequestBody = {};

type ResetPasswordRequestBody = {};

export async function signUp(body: SignUpRequestBody) {
  return await dangolAPI.post(APIPathname.signUp, body);
}

export async function checkEmailDuplicate(body: CheckEmailDuplicateRequestBody) {
  return await dangolAPI.post(APIPathname.checkEmailDuplicate, body);
}

export async function findEmail(body: FindEmailRequestBody) {
  return await dangolAPI.post(APIPathname.findEmail, body);
}

export async function verifyEmailForPasswordReset(body: VerifyEmailForPasswordResetRequestBody) {
  return await dangolAPI.post(APIPathname.verifyEmailForPasswordReset, body);
}

export async function resetPassword(body: ResetPasswordRequestBody) {
  return await dangolAPI.post(APIPathname.resetPassword, body);
}
