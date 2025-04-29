'use client';

import clsx from 'clsx';
import React, { useState } from 'react';

import Dropdown from '@/components/Dropdown/Dropdown';
import { ArrowDown, CheckLine } from '@/components/Icon';
import colors from '@/constants/colors';

const ManagedStoreList = () => {
  const [selectedStore, setSelectedStore] = useState('관리매장명 1 관리매장명 1관리매장명 1');
  const [storeList] = useState([
    '관리매장명 1 관리매장명 1관리매장명 1',
    '관리매장명 2',
    '관리매장명 3',
    '관리매장명 4',
    '관리매장명 5',
    '관리매장명 6',
    '관리매장명 7',
  ]);

  const handleSelect = (store: string) => () => {
    setSelectedStore(store);
  };

  return (
    <div className="px-8 py-[30px]">
      <Dropdown closeOnBlur>
        <div className="overflow-hidden rounded-[32px] bg-white">
          <Dropdown.Trigger>
            <button className="typo-body1-bold flex h-full w-full items-center justify-between border border-2 border-neutral-300 p-4 text-neutral-800">
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                {selectedStore}
              </span>
              <ArrowDown color={colors.neutral500} />
            </button>
          </Dropdown.Trigger>
        </div>
        <Dropdown.List className="typo-body3-regular border-1 absolute z-[100] max-h-[240px] w-full overflow-auto rounded-lg border-neutral-200 bg-white [&::-webkit-scrollbar]:hidden">
          {storeList.map((store, index) => (
            <Dropdown.Item
              key={store}
              className={clsx(
                'flex h-12 cursor-pointer items-center justify-between px-3 leading-[48px]',
                index < storeList.length - 1 && 'border-b border-b-neutral-200',
                store === selectedStore && 'text-brand-700',
              )}
              onClick={handleSelect(store)}
            >
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">{store}</span>
              <CheckLine />
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
    </div>
  );
};

export default ManagedStoreList;
