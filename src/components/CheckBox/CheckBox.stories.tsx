import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from '..';

const meta: Meta<typeof CheckBox> = {
  title: 'common/CheckBox',
  component: CheckBox,
  argTypes: {
    label: {
      control: 'text',
      description: '체크박스 라벨',
    },
    checked: {
      control: 'boolean',
      description: '체크박스 체크 여부',
    },
    disabled: {
      control: 'boolean',
      description: '체크박스 비활성화 여부',
    },
    onChange: { action: 'changed', description: '체크 상태 변경 이벤트' },
  },
  args: {
    label: '체크박스 라벨',
    checked: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/** 체크된 상태의 체크박스 */
export const Checked: Story = {
  args: {
    label: '체크됨',
    checked: true,
    disabled: true,
  },
};

/** 비활성화된 상태의 체크박스 */
export const DisabledUnchecked: Story = {
  args: {
    label: '비활성화됨 (체크X)',
    disabled: true,
    checked: false, // 명시적으로 설정
  },
};

/** 비활성화되고 체크된 상태의 체크박스 */
export const DisabledChecked: Story = {
  args: {
    label: '비활성화됨 (체크O)',
    disabled: true,
    checked: true,
  },
};

/** 라벨이 없는 체크박스 */
export const NoLabel: Story = {
  args: {
    label: undefined,
  },
};
