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

type DialogOption = {
  withCloseButton?: boolean;
};

type DialogAction = {
  pushDialog: (dialog: ReactElement, option?: DialogOption) => void;
  popDialog: (key?: string) => void;
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
      pushDialog: (dialog: ReactElement, option: DialogOption = { withCloseButton: true }) => {
        const id = uuidv4();

        setDialogs((prev) => [
          ...prev,
          {
            Component: dialog,
            key: id,
            withCloseButton: option.withCloseButton,
          },
        ]);
      },
      popDialog: (key?: string) => {
        if (key) {
          setDialogs((prev) => prev.filter((dialog) => dialog.key !== key));
        } else {
          setDialogs((prev) => prev.filter((_, index) => index < prev.length - 1));
        }
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
