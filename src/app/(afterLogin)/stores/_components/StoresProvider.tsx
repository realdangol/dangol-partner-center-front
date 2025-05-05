'use client';

import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useMemo, useState } from 'react';

import type { StoreTab } from '../_types';

type StoresState = {
  tab: StoreTab;
};

type StoresAction = {
  setTab: Dispatch<SetStateAction<StoreTab>>;
};

export const StoresStateContext = createContext<StoresState | null>(null);
export const StoresActionContext = createContext<StoresAction | null>(null);

const StoresProvider = ({ children }: PropsWithChildren) => {
  const [tab, setTab] = useState<StoreTab>('basic');

  const actions = useMemo(
    () => ({
      setTab,
    }),
    [],
  );

  return (
    <StoresStateContext.Provider value={{ tab }}>
      <StoresActionContext value={actions}>{children}</StoresActionContext>
    </StoresStateContext.Provider>
  );
};

export default StoresProvider;
