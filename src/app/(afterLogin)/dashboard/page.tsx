import { CustomerRatioChart, NewOrderStats, PopularMenuList, SalesStatistics } from './_components';

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <NewOrderStats />
      <SalesStatistics />
      <div className="grid grid-cols-2 gap-10">
        <PopularMenuList />
        <CustomerRatioChart />
      </div>
    </div>
  );
};

export default DashboardPage;
