import clsx from 'clsx';
import React from 'react';

import { useDropdown } from '@/components';
import Dropdown from '@/components/Dropdown/Dropdown';
import { ArrowDown } from '@/components/Icon';

import type { SalesStatisticsMetricValue } from './types';

type Props = {
  metric: SalesStatisticsMetricValue;
};

const SalesStatisticsMetricDropdownTrigger = ({ metric }: Props) => {
  const { open } = useDropdown();

  return (
    <Dropdown.Trigger>
      <div className="typo-body1-medium flex h-[54px] w-[120px] items-center gap-1 rounded-lg border border-neutral-300 pl-4 pr-3">
        <span className="text-neutral-800">
          {metric === 'orderCount' ? '주문건수' : '주문금액'}
        </span>
        <span
          className={clsx(
            'text-neutral-600 transition-transform duration-100 ease-linear',
            open ? 'rotate-180' : 'rotate-0',
          )}
        >
          <ArrowDown />
        </span>
      </div>
    </Dropdown.Trigger>
  );
};

export default SalesStatisticsMetricDropdownTrigger;
