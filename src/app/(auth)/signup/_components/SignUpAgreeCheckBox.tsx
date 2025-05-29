import type { ReactNode } from 'react';
import React from 'react';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { CheckBox } from '@/components';
import { ArrowRight } from '@/components/Icon';
import colors from '@/constants/colors';

import type { SignUpStep1FormValues } from './SignUpStep1';

type Props = {
  label: ReactNode;
  control: Control<SignUpStep1FormValues>;
  name: keyof SignUpStep1FormValues;
};

const SignUpAgreeCheckBox = ({ label, control, name }: Props) => {
  const { field } = useController({
    control,
    name,
  });

  return (
    <div className="flex justify-between">
      <CheckBox label={label} checked={field.value} onChange={field.onChange} />
      <button type="button">
        <ArrowRight color={colors.neutral300} />
      </button>
    </div>
  );
};

export default SignUpAgreeCheckBox;
