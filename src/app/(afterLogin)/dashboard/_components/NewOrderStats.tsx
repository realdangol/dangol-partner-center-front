import React from 'react';

import { Clipboard, ClipboardCheck, ClipboardDelete, Pan, Vehicle } from '@/components/Icon';

import { SubTitle } from '../../_components';

const NewOrderStats = () => {
  const orderInfoList = [
    {
      icon: <Clipboard size="56" />,
      title: '신규주문',
      count: 60,
      highlight: true,
    },
    {
      icon: <ClipboardDelete size="56" />,
      title: '주문취소',
      count: 1,
    },
    {
      icon: <Pan size="56" />,
      title: '조리중',
      count: 34,
    },
    {
      icon: <Vehicle size="56" />,
      title: '배달중',
      count: 2,
    },
    {
      icon: <ClipboardCheck size="56" />,
      title: '완료',
      count: 442,
    },
  ];

  return (
    <section>
      <div className="flex flex-col gap-8 py-4">
        <SubTitle>신규주문현황</SubTitle>
        <div className="flex justify-between gap-5">
          {orderInfoList.map((orderInfo) => (
            <div
              key={orderInfo.title}
              className="flex flex-1 flex-col gap-2.5 rounded-xl border border-neutral-200 bg-white p-[30px]"
            >
              <div className="flex items-center gap-[14px]">
                {orderInfo.icon}
                <span className="typo-h2-medium text-neutral-800">{orderInfo.title}</span>
              </div>
              <span
                className={`self-end text-[28px] font-bold ${orderInfo.highlight ? 'text-brand-700' : 'text-neutral-800'}`}
              >
                {orderInfo.count}건
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewOrderStats;
