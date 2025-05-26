import type { PropsWithChildren } from 'react';
import React from 'react';

import { OrderFilterForm, OrderHistoryTable } from './_components';

const OrdersPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-8">
      <OrderFilterForm />
      <OrderHistoryTable />
      {children}
    </div>
  );
};

export default OrdersPageLayout;
