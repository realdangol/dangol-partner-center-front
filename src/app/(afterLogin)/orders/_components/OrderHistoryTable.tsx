'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import useDialog from '@/components/Dialog/useDialog';
import { ArrowDown } from '@/components/Icon';
import { dangolPathname } from '@/constants/pathname';

import { SubTitle } from '../../_components';
import OrderDetailModal from './OrderDetailModal';

const orders = [
  {
    date: '25.04.10 11:07:06',
    number: '157415\n2432432432',
    status: '주문접수',
    customer: '홍길동',
    menu: '뚝불 외 1',
    amount: '29,000원',
    delivery: '미출발',
  },
  {
    date: '25.04.10 11:07:06',
    number: '157415\n2432432432',
    status: '조리중',
    customer: '홍길동',
    menu: '뚝불 외 1',
    amount: '29,000원',
    delivery: '미출발',
  },
  {
    date: '25.04.10 11:07:06',
    number: '157415\n2432432432',
    status: '조리완료',
    customer: '홍길동',
    menu: '뚝불 외 1',
    amount: '29,000원',
    delivery: '호출',
  },
  {
    date: '25.04.10 11:07:06',
    number: '157415\n2432432432',
    status: '배달중',
    customer: '홍길동',
    menu: '뚝불 외 1',
    amount: '29,000원',
    delivery: '배달중',
  },
  {
    date: '25.04.10 11:07:06',
    number: '157415\n2432432432',
    status: '완료',
    customer: '홍길동',
    menu: '뚝불 외 1',
    amount: '29,000원',
    delivery: '완료',
  },
];

const OrderHistoryTable = () => {
  const { openDialog } = useDialog();
  const pathname = usePathname();
  const isCancelledOrder = pathname === dangolPathname.ordersCancellations;

  const handleOrderClick = () => {
    openDialog(<OrderDetailModal isCancelled={isCancelledOrder} />, {
      className: '!p-0 !rounded-none',
    });
  };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <SubTitle>통합 주문내역</SubTitle>
        <div className="overflow-x-auto">
          <table className="w-full border-t border-gray-200 text-left text-sm">
            <thead className="typo-h2 bg-neutral-100 text-neutral-800">
              <tr>
                <th className="px-4 py-3 text-center">주문일</th>
                {pathname === dangolPathname.ordersCancellations && (
                  <th className="px-4 py-3 text-center">취소일</th>
                )}
                <th className="px-4 py-3 text-center">주문번호</th>
                <th className="px-4 py-3 text-center">주문상태</th>
                <th className="px-4 py-3 text-center">주문자</th>
                <th className="px-4 py-3 text-center">주문메뉴</th>
                <th className="px-4 py-3 text-center">결제금액</th>
                {pathname === dangolPathname.orders && (
                  <th className="px-4 py-3 text-center">배달상태</th>
                )}
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr
                  key={idx}
                  className="typo-body1-medium cursor-pointer border-b border-neutral-200 text-center text-neutral-800 transition-colors hover:bg-gray-50"
                  onClick={handleOrderClick}
                >
                  <td className="whitespace-nowrap px-4 py-3">{order.date}</td>
                  <td className="whitespace-pre-line px-4 py-3">{order.number}</td>
                  <td className="px-4 py-3 font-medium text-orange-600">
                    <span className="flex items-center justify-center gap-2.5">
                      {order.status}
                      <ArrowDown />
                    </span>
                  </td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.menu}</td>
                  <td className="px-4 py-3">{order.amount}</td>
                  <td
                    className={`px-4 py-3 ${
                      order.delivery === '미출발'
                        ? 'text-orange-600'
                        : order.delivery === '배달중'
                          ? 'text-blue-600'
                          : 'text-gray-700'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2.5">
                      {order.delivery}
                      <ArrowDown />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderHistoryTable;
