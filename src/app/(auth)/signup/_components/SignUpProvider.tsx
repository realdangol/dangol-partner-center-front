'use client';

import type { PropsWithChildren } from 'react';
import React, { createContext, useState } from 'react';

type SignUpStep = 1 | 2;
type SignUpFormValues = {
  termsAgreed: boolean;
  privacyAgreed: boolean;
  smsAgreed: boolean;
  marketingAgreed: boolean;
};
type SignUpState = {
  step: SignUpStep;
  signUpFormValues: SignUpFormValues;
  setStep: React.Dispatch<React.SetStateAction<SignUpStep>>;
  setSignUpFormValues: React.Dispatch<React.SetStateAction<SignUpFormValues>>;
};

const SignUpContext = createContext<SignUpState | null>(null);

export default SignUpContext;

export const SignUpProvider = ({ children }: PropsWithChildren) => {
  const [step, setStep] = useState<SignUpStep>(1);
  const [signUpFormValues, setSignUpFormValues] = useState<SignUpFormValues>({
    termsAgreed: false,
    privacyAgreed: false,
    smsAgreed: false,
    marketingAgreed: false,
  });

  return (
    <SignUpContext.Provider value={{ step, signUpFormValues, setStep, setSignUpFormValues }}>
      {children}
    </SignUpContext.Provider>
  );
};
