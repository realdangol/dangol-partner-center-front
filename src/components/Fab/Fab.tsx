import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  variant?: 'circular' | 'extended';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Fab = ({ variant = 'circular', children, leftIcon, rightIcon, ...restProps }: Props) => {
  const base =
    'relative h-12 flex items-center justify-center gap-1 bg-brand-700 text-white typo-body1-medium shadow-[0_2px_4px_0_#00000033] overflow-hidden disabled:bg-brand-400 disabled:cursor-not-allowed';

  const variantClass = {
    circular: 'w-12 rounded-full',
    extended: 'px-6 rounded-3xl',
  }[variant];

  const leftIconClass = 'pl-5';

  const rightIconClass = 'pr-5';

  return (
    <button
      className={clsx(
        base,
        variantClass,
        !!leftIcon && leftIconClass,
        !!rightIcon && rightIconClass,
      )}
      {...restProps}
    >
      <span className="absolute top-0 left-0 inline-block w-full h-full bg-black opacity-0 active:opacity-30" />
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export default Fab;
