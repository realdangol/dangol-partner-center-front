'use client';

import clsx from 'clsx';
import type { ChangeEventHandler, ComponentPropsWithoutRef, ReactNode, Ref } from 'react';
import React, { forwardRef, useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import type { Color } from '@/types/common';

type BaseProps = {
  label?: string;
  error?: boolean;
  helperText?: {
    value: string;
    color?: Color;
  };
  rightIcon?: ReactNode;
  containerClassName?: string;
  withLength?: boolean;
};

type NonMultiLineProps = {
  multiLine?: false;
} & BaseProps &
  ComponentPropsWithoutRef<'input'>;

type MultiLineProps = {
  multiLine: true;
} & BaseProps &
  ComponentPropsWithoutRef<'textarea'>;

type Props = NonMultiLineProps | MultiLineProps;

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  (
    {
      label,
      error = false,
      helperText,
      rightIcon,
      multiLine = false,
      containerClassName,
      withLength = false,
      ...inputProps
    },
    ref,
  ) => {
    const defaultId = useId();
    const [textLength, setTextLength] = useState(
      inputProps.defaultValue ? String(inputProps.defaultValue).length : 0,
    );

    const handleChange: ChangeEventHandler<HTMLInputElement & HTMLTextAreaElement> = (event) => {
      if (inputProps.maxLength) {
        setTextLength(event.target.value.length);
      }

      inputProps.onChange?.(event);
    };

    return (
      <div className={clsx('flex flex-col gap-1')}>
        {label && (
          <label
            htmlFor={inputProps?.id ?? defaultId}
            className="typo-body1-medium text-neutral-500"
          >
            {label}
          </label>
        )}
        <div
          className={twMerge(
            clsx(
              'typo-body1-regular flex items-center gap-2 rounded border bg-white pr-3 text-neutral-800',
              error ? 'border-error-600' : 'border-neutral-300',
              inputProps.disabled && 'cursor-not-allowed bg-neutral-100',
              !inputProps.readOnly && 'focus-within:border-brand-700',
              containerClassName,
            ),
          )}
        >
          {multiLine ? (
            <textarea
              ref={ref as Ref<HTMLTextAreaElement>}
              className={twMerge(
                clsx(
                  'h-[140px] w-full resize-none px-3 py-3 placeholder-neutral-300 outline-none scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-300',
                  'disabled:cursor-not-allowed disabled:placeholder-neutral-500',
                  inputProps.className,
                ),
              )}
              {...(inputProps as ComponentPropsWithoutRef<'textarea'>)}
              onChange={handleChange}
            />
          ) : (
            <>
              <input
                ref={ref as Ref<HTMLInputElement>}
                type="text"
                {...(inputProps as ComponentPropsWithoutRef<'input'>)}
                id={inputProps?.id ?? defaultId}
                className={twMerge(
                  clsx(
                    'h-14 w-full flex-1 appearance-none rounded py-3 pl-3 placeholder-neutral-300 outline-none',
                    'disabled:cursor-not-allowed disabled:placeholder-neutral-500',
                    inputProps.className,
                  ),
                )}
                onChange={handleChange}
              />
              {rightIcon}
            </>
          )}
        </div>
        {withLength && (
          <p className={`${error ? 'text-error-600' : 'text-neutral-800'} typo-element3 self-end`}>
            {textLength}/{inputProps.maxLength}
          </p>
        )}
        {helperText?.value && (
          <p
            className={`${error ? 'text-error-600' : (helperText?.color ?? 'text-neutral-800')} typo-element3`}
          >
            {helperText.value}
          </p>
        )}
      </div>
    );
  },
);

export default TextField;
