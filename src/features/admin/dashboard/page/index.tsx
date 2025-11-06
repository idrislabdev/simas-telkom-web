import BuildingColumnCharts from "@/features/admin/dashboard/components/building-column-chart";
import FacilitiesTable from "@/features/admin/dashboard/components/facilities-table";
import DashboardMap from "@/features/admin/dashboard/components/map";
import MosqueDonutChart from "@/features/admin/dashboard/components/mosque-donut-chart";
import MushollaDonutChart from "@/features/admin/dashboard/components/mushalla-donut-chart";
import DashboardSummaryCard from "@/features/admin/dashboard/components/summary-cards";

const DashboardPage = () => {
  return (
    <div className="flex flex-col space-y-4">
      <DashboardSummaryCard />
      <div className="flex items-center gap-4 h-[500px]">
        <div className="w-2/3 shadow-custom-5 rounded-md h-full">
          <BuildingColumnCharts />
        </div>
        <div className="w-1/3 flex flex-col gap-3 h-full">
          <div className="flex-1 shadow-custom-5 w-full rounded-md">
            <MosqueDonutChart />
          </div>
          <div className="flex-1 shadow-custom-5 w-full rounded-md">
            <MushollaDonutChart />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2 rounded-md shadow-custom-5">
          <FacilitiesTable />
        </div>
        <div className="w-1/2 p-1 rounded-md shadow-custom-5">
          <DashboardMap />
        </div>
      </div>
      {/* <div className="flex flex-col p-2 shadow-custom-5 rounded-md h-[500px]">
        <DashboardMap />
      </div> */}
    </div>
  );
};

export default DashboardPage;
