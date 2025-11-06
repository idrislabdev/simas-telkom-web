import { regional3Data } from "@/mocks/regional3Data";
import { Building2 } from "lucide-react";

const DashboardSummaryCard = () => {
  return (
    <div className="flex items-center gap-2">
      {regional3Data.slice(0, 3).map((item, index: number) => (
        <div
          className="flex flex-col gap-3 w-1/4 rounded-md bg-white shadow-custom-5 p-4"
          key={index}
        >
          <div className="flex items-center gap-2">
            <span className="h-10 w-10 bg-red-500 rounded-md flex flex-col justify-center items-center text-white">
              <Building2 size={24} />
            </span>
            <div className="flex flex-col">
              <label className="text-sm leading-5 text-neutral-500">
                {item.name}
              </label>
              <span className="text-xl font-semibold leading-5">
                {item.totalMosque + item.totalMusholla}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 divide-x divide-gray-200">
            <label className="text-blue-600 text-sm font-light pr-4">
              Masjid:{" "}
              <span className="text-neutral-900 font-normal">
                {item.totalMosque}
              </span>
            </label>
            <label className="text-blue-600 text-sm font-light pr-4">
              Mushalla:{" "}
              <span className="text-neutral-900 font-normal">
                {item.totalMusholla}
              </span>
            </label>
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-3 w-1/4 rounded-md bg-white shadow-custom-5 p-4 bg-neutral-gradient">
        <div className="flex items-center gap-2">
          <span className="h-10 w-10 bg-white rounded-md flex flex-col justify-center items-center text-neutral-900">
            <Building2 size={24} />
          </span>
          <div className="flex flex-col text-neutral-100">
            <label className="text-sm leading-5">{regional3Data[3].name}</label>
            <span className="text-xl font-semibold leading-5">
              {regional3Data[3].totalMosque + regional3Data[3].totalMusholla}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 divide-x divide-gray-200">
          <label className="text-neutral-100 text-sm font-light pr-4">
            Masjid:{" "}
            <span className="font-medium">{regional3Data[3].totalMosque}</span>
          </label>
          <label className="text-neutral-100 text-sm font-light pr-4">
            Mushalla:{" "}
            <span className="font-medium">
              {regional3Data[3].totalMusholla}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummaryCard;
