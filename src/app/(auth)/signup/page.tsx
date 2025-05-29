'use client';

import React from 'react';

import { SignUpStep1, SignUpStep2 } from './_components';
import { useSignUp } from './_hooks';

const SignUpPage = () => {
  const { step } = useSignUp();

  return <div className="mt-8">{step === 1 ? <SignUpStep1 /> : <SignUpStep2 />}</div>;
};

export default SignUpPage;
