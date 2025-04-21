import { APIPathname } from '@/constants/pathname';
import { dangolAPI } from '@/lib/axios';

type LoginRequestBody = {
  email: string;
  password: string;
};

export async function login(body: LoginRequestBody) {
  return await dangolAPI.post(APIPathname.login, body);
}
