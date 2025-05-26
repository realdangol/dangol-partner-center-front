'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import Dropdown from '@/components/Dropdown/Dropdown';
import { Alarm, MyPage } from '@/components/Icon';
import { dangolPathname } from '@/constants/pathname';

const Header = () => {
  const pathname = usePathname();
  const titleMap = {
    [dangolPathname.dashboard]: '대시보드',
    [dangolPathname.orders]: '통합 주문내역',
    [dangolPathname.ordersCancellations]: '취소 내역',
    [dangolPathname.sales]: '상세 매출 내역',
    [dangolPathname.transactions]: '결제 및 환불 내역',
    [dangolPathname.stores]: '매장정보 관리',
    [dangolPathname.menus]: '매뉴 관리',
    [dangolPathname.customers]: '이용 고객 정보',
    [dangolPathname.events]: '쿠폰 및 이벤트',
  };

  return (
    <header className="sticky top-0 z-[1000] h-[64px] border-b border-b-neutral-300 bg-white px-10 py-4">
      <div className="flex h-full items-center justify-between">
        <h1 className="typo-h1 text-black">{titleMap[pathname as keyof typeof titleMap]}</h1>
        <div className="flex gap-4 text-neutral-800">
          <Alarm />
          <Dropdown closeOnBlur>
            <Dropdown.Trigger>
              <button className="flex items-center gap-3">
                <MyPage />
                <span className="typo-body3-regular">관리자 명</span>
              </button>
            </Dropdown.Trigger>
            <Dropdown.List className="typo-body1-regular absolute left-[-60px] top-[24px] w-[180px] bg-white text-center shadow-[0px_4px_8px_0px_#00000014]">
              <Dropdown.Item className="cursor-pointer p-2.5">
                <span>관리자 정보 관리</span>
              </Dropdown.Item>
              <Dropdown.Item className="cursor-pointer p-2.5">
                <span>로그아웃</span>
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
