import type { ReactElement } from 'react';
import { useContext } from 'react';

import { DialogActionContext } from './DialogProvider';
import type { DialogOption } from './types';

const useDialog = () => {
  const { pushDialog, popDialog } = useContext(DialogActionContext);

  const openDialog = (dialog: ReactElement, option?: DialogOption) => {
    pushDialog(dialog, option);
  };

  const closeDialog = (key?: string) => {
    popDialog(key);
  };

  return { openDialog, closeDialog };
};

export default useDialog;
