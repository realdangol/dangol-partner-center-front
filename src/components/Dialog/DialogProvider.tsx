'use client';

import type { PropsWithChildren, ReactElement } from 'react';
import { createContext, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type DialogType = {
  Component: ReactElement;
  key: string;
  withCloseButton?: boolean;
};

type DialogState = {
  dialogs: DialogType[];
};

type DialogAction = {
  pushDialog: (dialog: ReactElement) => void;
  popDialog: (key: string) => void;
};

export const DialogStateContext = createContext<DialogState>({
  dialogs: [],
});

export const DialogActionContext = createContext<DialogAction>({
  pushDialog: () => {},
  popDialog: () => {},
});

export const DialogProvider = ({ children }: PropsWithChildren) => {
  const [dialogs, setDialogs] = useState<DialogType[]>([]);

  const actions = useMemo(
    () => ({
      pushDialog: (dialog: ReactElement, withCloseButton: boolean = true) => {
        const id = uuidv4();

        setDialogs((prev) => [
          ...prev,
          {
            Component: dialog,
            key: id,
            withCloseButton,
          },
        ]);
      },
      popDialog: (key: string) => {
        setDialogs((prev) => prev.filter((dialog) => dialog.key !== key));
      },
    }),
    [],
  );

  return (
    <DialogStateContext.Provider value={{ dialogs }}>
      <DialogActionContext.Provider value={actions}>{children}</DialogActionContext.Provider>
    </DialogStateContext.Provider>
  );
};
