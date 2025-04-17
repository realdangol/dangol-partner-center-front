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

type CheckEmailDuplicateBody = {
  email: string;
};

export async function signUp(body: SignUpRequestBody) {
  return await dangolAPI.post(APIPathname.signUp, body);
}

export async function checkEmailDuplicate(body: CheckEmailDuplicateBody) {
  return await dangolAPI.post(APIPathname.checkEmailDuplicate, body);
}
