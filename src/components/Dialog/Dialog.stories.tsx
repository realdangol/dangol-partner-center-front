import type { Meta } from '@storybook/react';
import { useCallback } from 'react';

import Dialog from './Dialog';
import useDialog from './useDialog';

const meta: Meta<typeof Dialog> = {
  title: 'Common/Dialog',
  component: Dialog,
};

export default meta;

export const Example = () => {
  const { openDialog } = useDialog();

  const Modal = useCallback(() => {
    const { closeDialog } = useDialog();

    return (
      <div>
        <div className="flex items-center">
          <h1>Modal</h1>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button onClick={() => closeDialog()}>취소</button>
          <button
            onClick={() => {
              alert('확인을 눌렀습니다.');
              closeDialog();
            }}
          >
            확인
          </button>
        </div>
      </div>
    );
  }, []);

  const handleClick = () => {
    openDialog(<Modal />);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Dialog</button>
    </div>
  );
};
