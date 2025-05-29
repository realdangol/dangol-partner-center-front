import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  variant?: 'fillPrimary' | 'fillNeutral' | 'outlinePrimary' | 'outlineNeutral';
  size?: 'large' | 'medium' | 'small';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = 'fillPrimary',
  size = 'large',
  children,
  leftIcon,
  rightIcon,
  ...restProps
}: Props) => {
  const base =
    'relative flex items-center justify-center gap-1 typo-body1-medium overflow-hidden disabled:cursor-not-allowed';

  const variantClass = {
    fillPrimary: 'bg-brand-700 text-white disabled:bg-brand-400 hover:bg-[#D27047]',
    fillNeutral: 'bg-neutral-200 text-neutral-600',
    outlinePrimary:
      'bg-white border border-brand-700 text-brand-700 disabled:border-brand-400 disabled:text-brand-400',
    outlineNeutral: 'bg-white border border-neutral-200 text-neutral-600',
  }[variant];

  const sizeClass = {
    large: 'h-12 px-4 rounded-xl',
    medium: 'h-11 px-4 rounded-xl',
    small: 'h-9 px-3 rounded-lg',
  }[size];

  const leftIconClass = {
    large: 'pl-3',
    medium: 'pl-3',
    small: 'pl-2',
  }[size];

  const rightIconClass = {
    large: 'pr-3',
    medium: 'pr-3',
    small: 'pr-2',
  }[size];

  const interactionBase = 'absolute top-0 left-0 inline-block w-full h-full bg-black opacity-0';

  const activeVariantBase = {
    fillPrimary: 'active:opacity-[0.33]',
    fillNeutral: 'active:opacity-[0.33]',
    outlinePrimary: 'active:opacity-10',
    outlineNeutral: 'active:opacity-10',
  }[variant];

  return (
    <button
      {...restProps}
      className={twMerge(
        clsx(
          base,
          variantClass,
          sizeClass,
          !!leftIcon && leftIconClass,
          !!rightIcon && rightIconClass,
          restProps.className,
        ),
      )}
    >
      <span
        className={clsx(interactionBase, !restProps.disabled && activeVariantBase)}
        role="presentation"
      />
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;
