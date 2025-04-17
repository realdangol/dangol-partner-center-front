import type { ReactElement } from 'react';
import { useContext } from 'react';

import { DialogActionContext } from './DialogProvider';

const useDialog = () => {
  const { pushDialog, popDialog } = useContext(DialogActionContext);

  const openDialog = (dialog: ReactElement) => {
    pushDialog(dialog);
  };

  const closeDialog = (key: string) => {
    popDialog(key);
  };

  return { openDialog, closeDialog };
};

export default useDialog;
