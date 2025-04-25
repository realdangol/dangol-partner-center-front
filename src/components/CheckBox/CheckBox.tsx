'use client';

import React, { useId } from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

const CheckBoxChecked = ({ disabled }: { disabled?: boolean }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_33_666)">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          fill={!disabled ? '#E27242' : '#E3E3E3'}
          stroke={!disabled ? '#E27242' : '#E3E3E3'}
          stroke-width="1.5"
        />
        <path
          d="M17 10L10.3333 16L7 13"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
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
      <g clip-path="url(#clip0_33_659)">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          fill={!disabled ? 'white' : '#F4F4F4'}
          stroke={!disabled ? '#D1D1D1' : '#E3E3E3'}
          stroke-width="1.5"
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

const CheckIcon = ({ checked, disabled }: { checked: boolean; disabled: boolean }) => {
  if (checked && !disabled) return <CheckBoxChecked />;
  if (!checked && !disabled) return <CheckBoxUnchecked />;
  if (checked && disabled) return <CheckBoxChecked disabled={true} />;
  if (!checked && disabled) return <CheckBoxUnchecked disabled={true} />;
};
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  id: providedId,
  className,
  onChange,
  ...props
}) => {
  const generatedId = useId();
  const id = providedId || generatedId;

  return (
    <label
      htmlFor={id}
      className={`inline-flex cursor-pointer items-center gap-2 ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="appearance-none peer"
        {...props}
      />
      <CheckIcon checked={checked} disabled={disabled} />
      {label && (
        <span
          className={`typo-label select-none ${disabled ? 'text-neutral-400' : 'text-neutral-800'}`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
