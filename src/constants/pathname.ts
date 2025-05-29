export const dangolPathname = {
  home: '/',
  login: '/login',
  logout: '/logout',
  signUp: '/signup',
  findAccount: '/find-account',
  dashboard: '/dashboard',
  orders: '/orders',
  ordersCancellations: '/orders/cancellations',
  sales: '/sales',
  transactions: '/sales/transactions',
  stores: '/stores',
  menus: '/stores/menus',
  customers: '/customers',
  events: '/events',
} as const;

export const APIPathname = {
  // user
  signUp: '/user/signup',
  checkEmailDuplicate: '/user/check/email',
  findEmail: '/user/recovery/email',
  verifyEmailForPasswordReset: '/user/certification/password',
  resetPassword: '/user/recovery/password',

  // auth
  login: '/auth/login',
  logout: '/auth/logout',
} as const;
