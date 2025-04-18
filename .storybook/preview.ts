import '../src/app/globals.css';

import type { Preview } from '@storybook/react';

import withProviders from './withProviders';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withProviders],
};

export default preview;
