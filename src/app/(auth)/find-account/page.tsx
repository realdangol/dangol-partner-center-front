'use client';

import React, { useState } from 'react';

import { Tabs } from '@/components';

import { FindEmailForm, FindPasswordForm } from './_components';

type FindAccountTab = 'email' | 'password';

const FindAccountPage = () => {
  const [tab, setTab] = useState<FindAccountTab>('email');

  const handleTabClick = (tab: string) => {
    setTab(tab as FindAccountTab);
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
        {tab === 'email' ? <FindEmailForm /> : <FindPasswordForm />}
      </div>
    </div>
  );
};

export default FindAccountPage;
