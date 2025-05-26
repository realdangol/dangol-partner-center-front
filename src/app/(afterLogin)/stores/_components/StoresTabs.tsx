'use client';

import React from 'react';

import { Tabs } from '@/components';

import { useStoresAction, useStoresState } from '../_hooks';
import type { StoreTab } from '../_types';

const StoresTabs = () => {
  const { tab } = useStoresState();
  const { setTab } = useStoresAction();

  const handleTabClick = (value: string) => {
    setTab(value as StoreTab);
  };

  return (
    <div className="mb-8 ml-[-40px] mt-4 h-[56px] w-[550px] border-b border-neutral-300">
      <Tabs
        items={[
          {
            label: '기본정보',
            value: 'basic',
          },
          {
            label: '매장정보',
            value: 'store',
          },
        ]}
        variant="depth1"
        activeTab={tab}
        fullWidth
        onTabClick={handleTabClick}
      />
    </div>
  );
};

export default StoresTabs;
