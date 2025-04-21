import clsx from 'clsx';
import React, { useId } from 'react';

import type { Color } from '@/types/common';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
  helperText?: {
    value: string;
    color?: Color;
  };
};

const Input = ({ label, error = false, helperText, ...inputProps }: Props) => {
  const defaultId = useId();

  const baseInputClass = `h-14 px-4 py-3 border border-neutral-300 rounded appearance-none outline-none typo-body1-regular text-neutral-800 placeholder-neutral-300`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputProps?.id ?? defaultId} className="typo-body1-medium text-neutral-800">
        {label}
      </label>
      <input
        type="text"
        {...inputProps}
        id={inputProps?.id ?? defaultId}
        className={clsx(baseInputClass)}
      />
      {helperText && (
        <p className={`typo-element3 text-${error ? 'error-600' : (helperText?.color ?? 'black')}`}>
          {helperText.value}
        </p>
      )}
    </div>
  );
};

export default Input;
