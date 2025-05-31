'use client';

import { useContext } from 'react';

import SignUpContext from '../_components/SignUpProvider';

const useSignUp = () => {
  const signUpContext = useContext(SignUpContext);

  if (!signUpContext) throw Error('SignUpProvider 안에서 사용해주세요.');

  const { step, signUpFormValues, setStep, setSignUpFormValues } = signUpContext;

  const goNextStep = () => {
    setStep(2);
  };

  const goPrevStep = () => {
    setStep(1);
  };

  return {
    step,
    signUpFormValues,
    goNextStep,
    goPrevStep,
    setSignUpFormValues,
  };
};

export default useSignUp;
