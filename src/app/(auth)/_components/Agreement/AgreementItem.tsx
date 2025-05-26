'use client';

import React from 'react';

import { CheckBox } from '@/components';
// import useDialog from '@/components/Dialog/useDialog';
import { ArrowRight } from '@/components/Icon';

export type AgreementCategory = 'service' | 'privacy' | 'sms' | 'marketing';

interface AgreementItemProps {
  category: AgreementCategory;
  checked: boolean;
  onChange: () => void;
}

export const agreementMeta: Record<
  AgreementCategory,
  {
    id: string;
    required: boolean;
    label: string;
    description: string;
  }
> = {
  service: {
    id: 'service',
    required: true,
    label: '(필수) ',
    description: '서비스 이용약관동의',
  },
  privacy: {
    id: 'privacy',
    required: true,
    label: '(필수) ',
    description: '개인정보수집 및 이용동의',
  },
  sms: {
    id: 'sms',
    required: true,
    label: '(필수) ',
    description: '문자서비스 이용약관 동의',
  },
  marketing: {
    id: 'marketing',
    required: false,
    label: '(선택) ',
    description: '광고성 정보 수신 동의',
  },
};

const AgreementItem = ({ category, checked, onChange }: AgreementItemProps) => {
  // const { openDialog } = useDialog();
  const meta = agreementMeta[category];

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <CheckBox
          id={meta.id}
          checked={checked}
          onChange={onChange}
          label={
            category === 'marketing' ? (
              <span className="text-neutral-700">
                {meta.label}
                {meta.description}
              </span>
            ) : (
              <>
                {meta.label}
                <span className="text-neutral-700">{meta.description}</span>
              </>
            )
          }
        />
      </div>
      <div
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-neutral-300"
        // onClick={() => openDialog(category)}
      >
        <ArrowRight size="16" />
      </div>
    </div>
  );
};

export default AgreementItem;
