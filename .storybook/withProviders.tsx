import React from 'react';

import { DialogProvider } from '../src/components/Dialog/DialogProvider';
import DialogRenderer from '../src/components/Dialog/DialogRenderer';

const withProviders = (Story) => {
  return (
    <DialogProvider>
      <Story />
      <DialogRenderer />
    </DialogProvider>
  );
};

export default withProviders;
