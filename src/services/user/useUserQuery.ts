import { useMutation } from '@tanstack/react-query';

import { checkEmailDuplicate, signUp } from './userService';

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
  });
};

export const useCheckEmailDuplicate = () => {
  return useMutation({
    mutationFn: checkEmailDuplicate,
  });
};
