'use client';

import React, { useContext } from 'react';

import Dialog from './Dialog';
import { DialogStateContext } from './DialogProvider';
import useDialog from './useDialog';

type DialogCloseButtonProps = {
  onClose: () => void;
};

const DialogCloseButton = ({ onClose }: DialogCloseButtonProps) => {
  return (
    <svg
      className="absolute right-8 top-6 cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <path
        d="M6 18L18 6M18 18L6 6"
        stroke="#1D1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DialogRenderer = () => {
  const { dialogs } = useContext(DialogStateContext);
  const { closeDialog } = useDialog();

  return (
    <div id="dangol-dialog">
      {dialogs.map(({ Component, key, withCloseButton, ...options }) => {
        const defaultProps = {
          onClose: () => {
            closeDialog(key);
          },
          ...options,
        };

        return (
          <Dialog key={key} {...defaultProps}>
            {Component}
            {withCloseButton && <DialogCloseButton onClose={() => closeDialog(key)} />}
          </Dialog>
        );
      })}
    </div>
  );
};

export default DialogRenderer;
