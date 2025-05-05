'use client';

import { useContext } from 'react';

import { StoresStateContext } from '../_components/StoresProvider';

const useStoresState = () => {
  const storesStateContext = useContext(StoresStateContext);

  if (!storesStateContext) throw Error('StoresProvider 내부에서 선언해주세요.');

  const { tab } = storesStateContext;

  return {
    tab,
  };
};

export default useStoresState;
