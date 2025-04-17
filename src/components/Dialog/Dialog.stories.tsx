import type { Meta } from '@storybook/react';

import Dialog from './Dialog';
import useDialog from './useDialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
};

export default meta;

export const Example = () => {
  let cnt = 0;
  const { openDialog } = useDialog();

  const handleClick = () => {
    openDialog(<h1>Dialog {cnt++}</h1>);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Dialog</button>
    </div>
  );
};
