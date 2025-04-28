export type LoginRequestBody = {
  email: string;
  password: string;
};

export type LoginResponseBody = {
  accessToken: string;
  refreshToken: string;
  adminToken: string;
  user: string;
};
