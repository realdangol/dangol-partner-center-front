'use client';

import { useContext } from 'react';

import { StoresActionContext } from '../_components/StoresProvider';

const useStoresAction = () => {
  const storesActionContext = useContext(StoresActionContext);

  if (!storesActionContext) throw Error('StoresProvider 내부에서 선언해주세요.');

  const { setTab } = storesActionContext;

  return {
    setTab,
  };
};

export default useStoresAction;
