'use client';

import React, { useContext } from 'react';

import Dialog from './Dialog';
import { DialogStateContext } from './DialogProvider';
import useDialog from './useDialog';

const DialogRenderer = () => {
  const { dialogs } = useContext(DialogStateContext);
  const { closeDialog } = useDialog();

  return (
    <div id="dangol-dialog">
      {dialogs.map(({ Component, key, withCloseButton }) => {
        return (
          <Dialog key={key}>
            {Component}
            {withCloseButton && <button onClick={() => closeDialog(key)}>닫기</button>}
          </Dialog>
        );
      })}
    </div>
  );
};

export default DialogRenderer;
