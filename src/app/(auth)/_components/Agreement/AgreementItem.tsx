'use client';

import React from 'react';

import { ArrowRight } from '@/components/Icon';

interface AgreementItemProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  span: string;
  required?: boolean;
  onOpenDialog?: () => void;
}

const AgreementItem = ({
  id,
  checked,
  onChange,
  label,
  span,
  required = false,
  onOpenDialog,
}: AgreementItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={id}
          className="h-4 w-4 rounded border-neutral-300"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          required={required}
        />
        <label htmlFor={id} className="typo-body1-regular">
          {label}
          <span className="text-neutral-700">{span}</span>
        </label>
      </div>
      <div
        className="flex h-8 w-8 items-center justify-center rounded-md text-gray-500 cursor-pointer"
        onClick={onOpenDialog}
      >
        <ArrowRight size="16" />
      </div>
    </div>
  );
};

export default AgreementItem;
