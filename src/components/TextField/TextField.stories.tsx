import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '..';
import { EyeSlash } from '../Icon';

const Timer = () => {
  return <span className="text-error-600">3:00</span>;
};

const meta: Meta<typeof TextField> = {
  title: 'common/TextField',
  component: TextField,
  argTypes: {
    defaultValue: {
      description: '초기 렌더링시 기본적으로 입력된 값',
      control: 'text',
    },
    label: {
      description: 'TextField Title',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder',
      control: 'text',
    },
    helperText: {
      description: 'TextField에 대한 더 자세한 설명이 필요한 경우',
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
    disabled: {
      description: 'TextField 활성화 유무',
      control: 'boolean',
    },
    rightIcon: {
      description: 'TextField 우측 아이콘',
      control: 'select',
      options: ['None', 'Icon', 'Timer'],
      mapping: {
        None: null,
        Icon: <EyeSlash />,
        Timer: <Timer />,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Usage: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};
