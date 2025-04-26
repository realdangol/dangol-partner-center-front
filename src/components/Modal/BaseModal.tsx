import type { ReactNode } from 'react';
import React from 'react';

import { Button } from '..';
import useDialog from '../Dialog/useDialog';

type Props = {
  title?: string;
  description: ReactNode;
  type?: 'confirm' | 'alert';
  Checkbox?: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const BaseModal = ({
  title,
  description,
  type = 'alert',
  Checkbox,
  onCancel,
  onConfirm,
}: Props) => {
  const { closeDialog } = useDialog();

  const handleCancel = () => {
    onCancel?.();
    closeDialog();
  };

  const handleConfirm = () => {
    onConfirm?.();
    closeDialog();
  };

  return (
    <div className="flex flex-col gap-4">
      {title && <h2 className="typo-h2 text-neutral-800">{title}</h2>}
      <p className="typo-body1-medium text-neutral-600">{description}</p>
      <div className={`flex items-center ${Checkbox ? 'justify-between' : 'justify-end'}`}>
        {Checkbox}
        <div className="flex gap-2">
          {type === 'confirm' && (
            <Button
              className="w-[60px]"
              variant="outlineNeutral"
              size="small"
              onClick={handleCancel}
            >
              취소
            </Button>
          )}
          <Button className="w-[60px]" size="small" onClick={handleConfirm}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
