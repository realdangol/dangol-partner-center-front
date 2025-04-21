import { useMutation } from '@tanstack/react-query';

import { login } from './authService';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
