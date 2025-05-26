'use client';

import React from 'react';

import { useStoresState } from '../_hooks';
import BusinessInformationForm from './BusinessInfoForm';
import LoginInformationForm from './LoginInfoForm';
import StoreBasicInfoForm from './StoreBasicInfoForm';
import StoreDescriptionForm from './StoreDescriptionForm';

const StoresForm = () => {
  const { tab } = useStoresState();

  return (
    <div className="flex flex-col gap-16">
      {tab === 'basic' ? (
        <>
          <div className="rounded-2xl border border-neutral-300 px-8 pb-16 pt-8">
            <LoginInformationForm />
          </div>
          <div className="rounded-2xl border border-neutral-300 px-8 pb-16 pt-8">
            <BusinessInformationForm />
          </div>
        </>
      ) : (
        <>
          <div className="rounded-2xl border border-neutral-300 px-8 pb-16 pt-8">
            <StoreBasicInfoForm />
          </div>
          <div className="rounded-2xl border border-neutral-300 px-8 pb-16 pt-8">
            <StoreDescriptionForm />
          </div>
        </>
      )}
    </div>
  );
};

export default StoresForm;
