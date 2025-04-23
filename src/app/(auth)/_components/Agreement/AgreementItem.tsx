'use client';

import React from 'react';

import { ArrowRight } from '@/components/Icon';
import {
  chkBoxLabelId,
  chkBoxLabelSapn,
  chkBoxLabelText,
  chkBoxRequired,
} from '@/constants/checkbox';

type AgreementCategory = 'service' | 'privacy' | 'sms' | 'marketing';

interface AgreementItemProps {
  category: AgreementCategory;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onOpenDialog?: () => void;
}

const AgreementItem = ({ category, checked, onChange, onOpenDialog }: AgreementItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {/* 체크박스 컴포넌트로 대체 예정 */}
        <input
          type="checkbox"
          id={chkBoxLabelId[category]}
          className="h-4 w-4 rounded border-neutral-300"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          required={chkBoxRequired[category]}
        />
        <label
          htmlFor={chkBoxLabelId[category]}
          className={`typo-body1-regular ${!chkBoxRequired[category] ? 'text-neutral-700' : ''}`}
        >
          {chkBoxLabelText[category]}
          <span className="text-neutral-700">{chkBoxLabelSapn[category]}</span>
        </label>
      </div>
      <div
        className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-300 cursor-pointer"
        onClick={onOpenDialog}
      >
        <ArrowRight size="16" />
      </div>
    </div>
  );
};

export default AgreementItem;
