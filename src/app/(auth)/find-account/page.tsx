'use client';

import type { FormEventHandler } from 'react';
import React, { useRef, useState } from 'react';

import { Tabs, TextField } from '@/components';
import preventSubmitByEnter from '@/utils/preventSubmitByEnter';

import { AuthSubmitButton } from '../_components';

type FindAccountTab = 'email' | 'password';

const FindAccountPage = () => {
  const businessNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const businessLicenseNumberInputRef = useRef<HTMLInputElement>(null);
  const [tab, setTab] = useState<FindAccountTab>('email');

  const resetInputValues = () => {
    switch (tab) {
      case 'email': {
        if (!businessNameInputRef.current || !businessLicenseNumberInputRef.current) return;

        businessNameInputRef.current.value = '';
        businessLicenseNumberInputRef.current.value = '';
        break;
      }
      case 'password': {
        if (!emailInputRef.current || !businessLicenseNumberInputRef.current) return;

        emailInputRef.current.value = '';
        businessLicenseNumberInputRef.current.value = '';
        break;
      }
      default:
        break;
    }
  };

  const handleTabClick = (tab: string) => {
    setTab(tab as FindAccountTab);
    resetInputValues();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mt-16">
      <div className="flex flex-col gap-8">
        <Tabs
          items={[
            {
              value: 'email',
              label: '이메일 찾기',
            },
            {
              value: 'password',
              label: '비밀번호 찾기',
            },
          ]}
          activeTab={tab}
          fullWidth
          onTabClick={handleTabClick}
        />
        <form
          className="flex flex-col gap-8"
          onSubmit={handleSubmit}
          onKeyDown={preventSubmitByEnter}
        >
          <div className="flex flex-col gap-6">
            {tab === 'email' ? (
              <TextField
                ref={businessNameInputRef}
                label="사업자명"
                placeholder="사업자명을 입력해주세요."
              />
            ) : (
              <TextField
                ref={emailInputRef}
                type="email"
                label="이메일"
                placeholder="이메일 입력해주세요."
              />
            )}
            <TextField
              ref={businessLicenseNumberInputRef}
              label="사업자번호"
              placeholder="사업자번호를 입력해주세요."
            />
          </div>
          <AuthSubmitButton>{tab === 'email' ? '이메일 찾기' : '비밀번호 찾기'}</AuthSubmitButton>
        </form>
      </div>
    </div>
  );
};

export default FindAccountPage;
