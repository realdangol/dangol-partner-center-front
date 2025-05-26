import React from 'react';

import { SubTitle } from '../../_components';

const PopularMenuList = () => {
  const popularMenu = [
    {
      value: '메뉴명 1',
      count: 10,
    },
    {
      value: '메뉴명 2',
      count: 5,
    },
    {
      value: '메뉴명 3',
      count: 2,
    },
    {
      value: '메뉴명 4',
      count: 1,
    },
  ];

  return (
    <section>
      <div className="flex h-full flex-col gap-8 rounded-[32px] border border-neutral-200 p-8">
        <SubTitle>인기메뉴</SubTitle>
        <div className="flex flex-col gap-8">
          {popularMenu.map((menu, index) => (
            <div key={menu.value} className="flex justify-between">
              <div className="typo-h2-medium flex gap-4">
                <span className="inline-block w-5 text-center">{index + 1}</span>
                <span>{menu.value}</span>
              </div>
              <span className="text-brand-700">{menu.count}건</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenuList;
