'use client';

import React, { useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { Button, Select } from '@/components';
import colors from '@/constants/colors';

import { SubTitle } from '../../_components';
import type { SalesStatisticsMetricLabel, SalesStatisticsMetricValue } from './types';

type SalesStatisticsPeriod = 'daily' | 'weekly' | 'monthly';
type MetricOption = {
  label: SalesStatisticsMetricLabel;
  value: SalesStatisticsMetricValue;
};

const metricList: MetricOption[] = [
  { label: '주문건수', value: 'orderCount' },
  { label: '주문금액', value: 'salesAmount' },
];

const SalesStatistics = () => {
  const [period, setPeriod] = useState<SalesStatisticsPeriod>('daily');
  const [metric, setMetric] = useState<SalesStatisticsMetricValue>('orderCount');

  const hourlyData = [
    { hour: '0시', count: 120 },
    { hour: '1시', count: 150 },
    { hour: '2시', count: 140 },
    { hour: '3시', count: 180 },
    { hour: '4시', count: 170 },
    { hour: '5시', count: 160 },
    { hour: '6시', count: 200 },
    { hour: '7시', count: 190 },
    { hour: '8시', count: 210 },
    { hour: '9시', count: 220 },
    { hour: '10시', count: 230 },
    { hour: '11시', count: 250 },
    { hour: '12시', count: 180 },
    { hour: '13시', count: 160 },
    { hour: '14시', count: 200 },
    { hour: '15시', count: 220 },
    { hour: '16시', count: 260 },
    { hour: '17시', count: 280 },
    { hour: '18시', count: 300 },
    { hour: '19시', count: 310 },
    { hour: '20시', count: 330 },
    { hour: '21시', count: 340 },
    { hour: '22시', count: 360 },
    { hour: '23시', count: 400 },
  ];

  const handlePeriodClick = (period: SalesStatisticsPeriod) => () => {
    setPeriod(period);
  };

  const handleSelectMetric = (value: string) => {
    setMetric(value as SalesStatisticsMetricValue);
  };

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <SubTitle>매출통계</SubTitle>
        <div className="flex">
          <Button
            className="w-[84px] rounded-none rounded-bl rounded-tl"
            variant={period === 'daily' ? 'fillPrimary' : 'outlineNeutral'}
            onClick={handlePeriodClick('daily')}
          >
            일일
          </Button>
          <Button
            className="w-[84px] rounded-none"
            variant={period === 'weekly' ? 'fillPrimary' : 'outlineNeutral'}
            onClick={handlePeriodClick('weekly')}
          >
            주간
          </Button>
          <Button
            className="w-[84px] rounded-none rounded-br rounded-tr"
            variant={period === 'monthly' ? 'fillPrimary' : 'outlineNeutral'}
            onClick={handlePeriodClick('monthly')}
          >
            월간
          </Button>
        </div>
      </div>
      <div className="rounded-[32px] border border-neutral-200 bg-white py-[30px]">
        <div className="flex items-center justify-between px-8">
          <SubTitle>총 3,155,822원</SubTitle>
          <Select options={metricList} selectedOption={metric} onSelect={handleSelectMetric} />
        </div>
        <ResponsiveContainer width="100%" height={270}>
          <BarChart data={hourlyData}>
            <XAxis
              dataKey="hour"
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.neutral800, fontSize: '1rem' }}
            />
            <Tooltip formatter={(v) => [`${v}원`, '매출']} cursor={{ fill: colors.neutral200 }} />
            <Bar dataKey="count" radius={[4, 4, 0, 0]} fill={colors.brand700} barSize={14} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default SalesStatistics;
