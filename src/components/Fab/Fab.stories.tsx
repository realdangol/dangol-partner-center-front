import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import FloatingActionButton from './Fab';

const Icon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 12H19M12 19V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const meta: Meta<typeof FloatingActionButton> = {
  title: 'Common/Fab',
  component: FloatingActionButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['circular', 'extended'],
      description: '버튼 모양',
    },
    leftIcon: {
      control: 'select',
      options: ['None', 'Icon'],
      mapping: {
        None: null,
        Icon: <Icon />,
      },
      description: '버튼 왼쪽 아이콘',
    },
    rightIcon: {
      control: 'select',
      options: ['None', 'Icon'],
      mapping: {
        None: null,
        Icon: <Icon />,
      },
      description: '버튼 오른쪽 아이콘',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FloatingActionButton>;

export const Usage: Story = {
  args: {
    variant: 'extended',
    children: 'Text',
    onClick: action('Click'),
  },
};
