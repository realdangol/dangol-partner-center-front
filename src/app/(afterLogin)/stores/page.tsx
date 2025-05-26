import React from 'react';

import { StoresForm, StoresProvider, StoresTabs } from './_components';

const StoresPage = () => {
  return (
    <div>
      <StoresProvider>
        <StoresTabs />
        <StoresForm />
      </StoresProvider>
    </div>
  );
};

export default StoresPage;
