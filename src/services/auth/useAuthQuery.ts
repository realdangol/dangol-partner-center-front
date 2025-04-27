import { useMutation } from '@tanstack/react-query';

import { login, logout } from './authService';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
