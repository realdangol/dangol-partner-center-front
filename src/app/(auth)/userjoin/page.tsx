'use client';

import React, { useState } from 'react';

import { Button, Divider } from '@/components';
import useDialog from '@/components/Dialog/useDialog';

import AgreementAllCheckbox from '../_components/Agreement/AgreementAllCheckbox';
import AgreementItem from '../_components/Agreement/AgreementItem';

const termsOptions = [
  { id: 'service', label: '(필수) ', span: '서비스 이용약관동의', required: true },
  { id: 'privacy', label: '(필수) ', span: '개인정보수집 및 이용동의', required: true },
  { id: 'sms', label: '(필수) ', span: '문자서비스 이용약관 동의', required: true },
];

const UserJoinPage = () => {
  // 정보동의 체크
  const [agreements, setAgreements] = useState({
    all: false,
    service: false,
    privacy: false,
    sms: false,
    marketing: false,
  });

  // 전체동의 함수
  const handleAllChange = (checked: boolean) => {
    setAgreements({
      all: checked,
      service: checked,
      privacy: checked,
      sms: checked,
      marketing: checked,
    });
  };

  // key 값 개별 동의 함수
  const handleSingleChange = (key: string, checked: boolean) => {
    const newAgreements = { ...agreements, [key]: checked };

    const allChecked =
      newAgreements.service &&
      newAgreements.privacy &&
      newAgreements.sms &&
      newAgreements.marketing;

    setAgreements({ ...newAgreements, all: allChecked });
  };

  const { openDialog } = useDialog();

  const isNextEnabled = agreements.service && agreements.privacy && agreements.sms;
  return (
    <div className="mt-8">
      <p className="mb-8 typo-h2">찐단골 관리자 약관동의</p>
      <div className="space-y-8">
        {/* 전체 동의 */}
        <AgreementAllCheckbox checked={agreements.all} onChange={handleAllChange} />

        <div className="space-y-4 pl-4 pr-4">
          {termsOptions.map((term) => (
            <AgreementItem
              key={term.id}
              id={term.id}
              label={term.label}
              span={term.span}
              checked={agreements[term.id as keyof typeof agreements]}
              onChange={(checked) => handleSingleChange(term.id, checked)}
              required={term.required}
              onOpenDialog={() => openDialog()}
            />
          ))}

          <Divider color="neutral-200" />

          <AgreementItem
            key="marketing"
            id="marketing"
            label=""
            span="(선택) 광고성 정보 수신 동의"
            checked={agreements.marketing}
            onChange={(checked) => handleSingleChange('marketing', checked)}
            required={false}
            onOpenDialog={() => openDialog()}
          />
        </div>
        <div className="flex justify-center">
          <Button
            className="w-[542px] h-[48px] !rounded"
            variant={isNextEnabled ? 'fillPrimary' : 'fillNeutral'}
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserJoinPage;
