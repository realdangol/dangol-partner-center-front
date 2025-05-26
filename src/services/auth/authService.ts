import { APIPathname } from '@/constants/pathname';
import DangolAPIClient from '@/lib/axios/DangolAPIClient';

import type { LoginRequestBody, LoginResponseBody } from './types';

export async function login(body: LoginRequestBody) {
  return await DangolAPIClient.post<LoginResponseBody>(APIPathname.login, body);
}

export async function logout() {
  return await DangolAPIClient.post<true>(APIPathname.logout);
}
