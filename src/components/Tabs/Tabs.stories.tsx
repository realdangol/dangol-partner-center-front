// src/components/common/Tabs/Tabs.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import type { TabItem } from './Tabs';
import { Tabs } from './Tabs';

// Storybook 설정
const meta: Meta<typeof Tabs> = {
  title: 'common/Tabs',
  component: Tabs,
  argTypes: {
    items: {
      control: 'object',
      description: '탭 항목 배열 (id, label, count?, disabled?)',
    },
    activeTabId: {
      control: 'text',
      description: '현재 활성화된 탭의 ID',
    },
    onTabChange: {
      action: 'tabChanged',
      description: '탭 변경 시 호출되는 콜백 함수 (id 전달)',
    },
    variant: {
      control: 'radio',
      options: ['depth1', 'depth2'],
      description: '탭 스타일 variant',
    },
    className: { control: 'text' },
    tablistClassName: { control: 'text' },
    tabClassName: { control: 'text' },
  },
  render: function Render(args) {
    const [activeTab, setActiveTab] = useState(args.activeTabId || args.items[0]?.id);

    return (
      <Tabs
        {...args}
        activeTabId={activeTab}
        onTabChange={(id) => {
          setActiveTab(id);
          args.onTabChange(id);
        }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// --- 기본 데이터 ---
const defaultItems: TabItem[] = [
  { id: 'tab1', label: 'Text' },
  { id: 'tab2', label: 'Text' },
  { id: 'tab3', label: 'Text', disabled: true },
];

const countItems: TabItem[] = [
  { id: 'count1', label: 'Text', count: 12 },
  { id: 'count2', label: 'Text', count: 5 },
  { id: 'count3', label: 'Text', count: 99 },
];

const overflowItems: TabItem[] = [
  { id: 'over1', label: '첫 번째 탭' },
  { id: 'over2', label: '두 번째 탭' },
  { id: 'over3', label: '세 번째 탭' },
  { id: 'over4', label: '네 번째 탭' },
  { id: 'over5', label: '다섯 번째 탭 (길게)' },
  { id: 'over6', label: '여섯 번째 탭' },
  { id: 'over7', label: '일곱 번째 탭' },
  { id: 'over8', label: '여덟 번째 탭' },
];

// --- Depth 1 스토리 ---
export const Depth1Default: Story = {
  args: {
    items: defaultItems,
    activeTabId: 'tab1',
    variant: 'depth1',
  },
};

export const Depth1WithCount: Story = {
  args: {
    items: countItems,
    activeTabId: 'count2',
    variant: 'depth1',
  },
};

export const Depth1Overflow: Story = {
  args: {
    items: overflowItems,
    activeTabId: 'over1',
    variant: 'depth1',
    className: 'max-w-md',
  },
};

// --- Depth 2 스토리 ---
export const Depth2Default: Story = {
  args: {
    items: defaultItems,
    activeTabId: 'tab1',
    variant: 'depth2',
  },
};

export const Depth2Overflow: Story = {
  args: {
    items: overflowItems,
    activeTabId: 'over3',
    variant: 'depth2',
    className: 'max-w-md',
  },
};
