'use client';

import React, { useState } from 'react';

import { Button, CheckBox, Divider } from '@/components';

import type { AgreementCategory } from '../_components/Agreement/AgreementItem';
import AgreementItem from '../_components/Agreement/AgreementItem';

type AgreementsState = Record<AgreementCategory, boolean>;

const termsOptions: AgreementCategory[] = ['service', 'privacy', 'sms'];
const allTerms: AgreementCategory[] = [...termsOptions, 'marketing'];

const UserJoinPage = () => {
  const [agreements, setAgreements] = useState<AgreementsState>({
    service: false,
    privacy: false,
    sms: false,
    marketing: false,
  });

  const isAllChecked =
    agreements.service && agreements.privacy && agreements.sms && agreements.marketing;

  const isNextEnabled = agreements.service && agreements.privacy && agreements.sms;

  const toggleAll = () => {
    const next = !isAllChecked;
    setAgreements({
      service: next,
      privacy: next,
      sms: next,
      marketing: next,
    });
  };

  const toggleAgreementItem = (key: AgreementCategory) => () => {
    setAgreements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="mt-8">
      <p className="typo-h2 mb-8">찐단골 관리자 약관동의</p>
      <div className="space-y-8">
        {/* 전체 동의 */}
        <div className="flex gap-[8px] rounded-md border border-neutral-200 p-4">
          <CheckBox label="전체동의" id="all" checked={isAllChecked} onChange={toggleAll} />
        </div>

        {/* 개별 동의 항목 */}
        <div className="space-y-4 pl-4 pr-4">
          {allTerms.map((term) => (
            <React.Fragment key={term}>
              {term === 'marketing' && (
                <Divider color="neutral-200" style={{ marginTop: '32px' }} />
              )}
              <AgreementItem
                category={term}
                checked={agreements[term]}
                onChange={toggleAgreementItem(term)}
              />
            </React.Fragment>
          ))}
        </div>

        {/* 다음 버튼 */}
        <div className="flex justify-center">
          <Button
            className="h-[48px] w-[542px] !rounded"
            variant={isNextEnabled ? 'fillPrimary' : 'fillNeutral'}
            disabled={!isNextEnabled}
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserJoinPage;
