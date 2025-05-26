import React from 'react';

type Props = {
  isCancelled?: boolean;
};

const OrderDetailModal = ({ isCancelled = false }: Props) => {
  return (
    <div>
      <div className="bg-neutral-800 p-4">
        <span>{isCancelled ? '주문취소내역' : '주문상세내역'}</span>
      </div>
      <div className="flex flex-col gap-4 px-4 pb-4 pt-2">
        <div className="flex flex-col gap-4">
          <span>주문메뉴</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
