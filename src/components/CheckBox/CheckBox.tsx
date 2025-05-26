'use client';

import type { ChangeEventHandler } from 'react';
import React, { useId } from 'react';

import colors from '@/constants/colors';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

const CheckBoxChecked = ({ disabled }: { disabled?: boolean }) => {
  const color = disabled ? colors.neutral200 : colors.brand700;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_33_666)">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M17 10L10.3333 16L7 13"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_33_666">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const CheckBoxUnchecked = ({ disabled }: { disabled?: boolean }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_33_659)">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          fill={disabled ? colors.neutral100 : colors.white}
          stroke={disabled ? colors.neutral300 : colors.neutral200}
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_33_659">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const CheckBoxIcon = ({ checked, disabled }: { checked: boolean; disabled: boolean }) => {
  return (
    <>
      {checked ? (
        <CheckBoxChecked disabled={disabled} />
      ) : (
        <CheckBoxUnchecked disabled={disabled} />
      )}
    </>
  );
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  id,
  className,
  onChange,
  ...props
}) => {
  const defaultId = useId();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (disabled) return;

    onChange?.(event);
  };

  return (
    <label
      htmlFor={id}
      className={`inline-flex w-[fit-content] cursor-pointer items-center gap-2 ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
    >
      <input
        type="checkbox"
        {...props}
        id={id || defaultId}
        checked={checked}
        disabled={disabled}
        className="hidden"
        onChange={handleChange}
      />
      <CheckBoxIcon checked={checked} disabled={disabled} />
      {label && (
        <span
          className={`${disabled ? 'text-neutral-400' : 'text-neutral-800'} typo-body3-regular`}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
