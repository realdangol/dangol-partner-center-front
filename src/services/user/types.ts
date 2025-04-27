export type SignUpRequestBody = {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  isPersonalInfoCollectionAgree: boolean;
  isPersonalInfoUseAgree: boolean;
};

export type SignUpResponseBody = {
  email: string;
  name: string;
  phoneNumber: string;
  isPersonalInfoCollectionAgree: boolean;
  isPersonalInfoUseAgree: boolean;
};

export type CheckEmailDuplicateRequestBody = {
  email: string;
};

export type FindEmailRequestBody = {
  name: string;
  phoneNumber: string;
};

export type FindEmailResponseBody = {
  email: string;
};

export type VerifyEmailForPasswordResetRequestBody = {
  type: 'signup';
  email: string;
  name: string;
};

export type ResetPasswordRequestBody = {
  code: string;
  password: string;
  type: 'signup';
  email: string;
  name: string;
};
