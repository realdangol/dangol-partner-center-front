'use client';

import React from 'react';

import { dangolPathname } from '@/constants/pathname';

import { ManagedStoreList } from '..';
import SidebarMenu from './SidebarMenu';

const sideNavigationBarList = [
  {
    title: '대시보드',
    href: dangolPathname.dashboard,
  },
  {
    title: '주문관리',
    subMenu: [
      {
        title: '통합 주문내역',
        href: dangolPathname.orders,
      },
      {
        title: '취소 내역',
        href: dangolPathname.ordersCancellations,
      },
    ],
  },
  {
    title: '매출관리',
    subMenu: [
      {
        title: '상세 매출 내역',
        href: dangolPathname.sales,
      },
      {
        title: '결제 및 환불 내역',
        href: dangolPathname.transactions,
      },
    ],
  },
  {
    title: '매장관리',
    subMenu: [
      {
        title: '매장정보 관리',
        href: dangolPathname.stores,
      },
      {
        title: '메뉴 관리',
        href: dangolPathname.menus,
      },
    ],
  },
  {
    title: '고객관리',
    subMenu: [
      {
        title: '이용 고객 정보',
        href: dangolPathname.customers,
      },
      {
        title: '쿠폰 및 이벤트',
        href: dangolPathname.events,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="typo-body1-medium fixed left-0 top-0 flex h-[100dvh] w-[240px] flex-col justify-between overflow-auto bg-neutral-800 [&::-webkit-scrollbar]:hidden">
      <div>
        <ManagedStoreList />
        <nav>
          <ul>
            {sideNavigationBarList.map((navigation) => (
              <SidebarMenu key={navigation.title} {...navigation} />
            ))}
          </ul>
        </nav>
      </div>
      <span className="mt-[64px] block w-full px-[30px] py-4 text-center text-neutral-500">
        이용 문의
      </span>
    </aside>
  );
};

export default Sidebar;
