import type { Meta, StoryObj } from '@storybook/react';

import { colorOptions } from '@/constants/colors';

import { Divider } from '..';

const meta: Meta<typeof Divider> = {
  title: 'common/Divider',
  component: Divider,
  decorators: [
    (Story) => {
      return (
        <div className="flex h-[24px]">
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    orientation: {
      description: 'Divider 방향',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    color: {
      description: 'Divider Color',
      control: 'select',
      options: colorOptions,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Usage: Story = {
  args: {
    orientation: 'vertical',
  },
};
