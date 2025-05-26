import { useMutation } from '@tanstack/react-query';

import {
  checkEmailDuplicate,
  findEmail,
  resetPassword,
  signUp,
  verifyEmailForPasswordReset,
} from './userService';

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
  });
};

export const useFindEmail = () => {
  return useMutation({
    mutationFn: findEmail,
  });
};

export const useCheckEmailDuplicate = () => {
  return useMutation({
    mutationFn: checkEmailDuplicate,
  });
};

export const useVerifyEmailForPasswordReset = () => {
  return useMutation({
    mutationFn: verifyEmailForPasswordReset,
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
  });
};
