'use client';

import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import colors from '@/constants/colors';

import { SubTitle } from '../../_components';

const repeatData = [
  { name: '신규 단골', value: 4 },
  { name: '재주문 단골', value: 40 },
];

const COLORS = [colors.brand700, colors.brand500];

const CustomerRatioChart = () => {
  return (
    <section>
      <div className="flex h-full flex-col gap-8 rounded-[32px] border border-neutral-200 p-8">
        <SubTitle>단골비율</SubTitle>
        <div className="flex items-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={repeatData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
              >
                {repeatData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div>
            <ul className="w-[160px] space-y-3">
              {repeatData.map((entry, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="typo-body2-medium flex items-center gap-3.5">
                    <span
                      className="inline-block h-4 w-4 rounded-full"
                      style={{ backgroundColor: COLORS[index] }}
                    ></span>
                    <span className="text-neutral-800">{entry.name}</span>
                  </div>
                  <span className={`text-[${COLORS[index]}]`}>{entry.value}명</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerRatioChart;
