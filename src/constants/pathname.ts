export const dangolPathname = {
  home: '/',
  login: '/login',
  signUp: '/userjoin',
  findEmail: '/find-email',
  findPassword: '/find-password',
} as const;

export const APIPathname = {
  // user
  signUp: '/user/signup',
  checkEmailDuplicate: '/user/check/email',

  // auth
  login: '/auth/login',
} as const;
