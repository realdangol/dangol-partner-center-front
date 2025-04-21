import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '..';

const meta: Meta<typeof Input> = {
  title: 'common/Input',
  component: Input,
  argTypes: {
    label: {
      description: 'Input Title',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder',
      control: 'text',
    },
    helperText: {
      description: 'Input에 대한 더 자세한 설명이 필요한 경우',
      control: 'object',
      table: {
        type: {
          summary: '{ value: string; color?: Color }',
          detail: 'color값은 저희 디자인시스템에서 정의한 color입니다.',
        },
      },
    },
    error: {
      description: '에러 유무',
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Usage: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: {
      value: 'helper Text',
    },
    error: false,
  },
};
