import { Building, Building2, Users2 } from "lucide-react";

interface WitelData {
  name: string;
  totalMosque: number;
  totalMusholla: number;
  totalBKM: number;
  completeness: {
    mosque: string; // format: "x/y"
    musholla: string; // format: "x/y"
  };
}
const SummaryCardBlack = (props: { item: WitelData }) => {
  const { item } = props;
  return (
    <div className="bg-neutral-950 w-full shadow-custom-4 p-4 flex flex-col gap-4 max-w-sm rounded-md">
      <div className="flex flex-col">
        <h5 className="text-red-700">Wilayah</h5>
        <p className="text-2xl font-bold text-white">{item.name}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[9px] text-neutral-100 font-light">
          Berdasarkan Data Keseluruhan
        </label>
        <ul className="flex flex-col gap-1 text-sm text-neutral-200">
          <li className="flex items-center gap-2">
            <Building2 size={16} /> Jumlah Masjid :
            <span>{item.totalMosque}</span>
          </li>
          <li className="flex items-center gap-2">
            <Building size={16} /> Jumlah Musholla :
            <span>{item.totalMusholla}</span>
          </li>
          <li className="flex items-center gap-2">
            <Users2 size={16} /> Jumlah BKM :<span>{item.totalBKM}</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[9px] text-neutral-100 font-light">
          Berdasarkan Kelengkapan Fasilitas
        </label>
        <ul className="flex flex-col gap-1 text-sm text-neutral-200">
          <li className="flex items-center gap-2">
            <Building2 size={16} /> Masjid :
            <span>{item.completeness.mosque}</span>
          </li>
          <li className="flex items-center gap-2">
            <Building size={16} /> Musholla :
            <span>{item.completeness.musholla}</span>
          </li>
        </ul>
      </div>
      <button className="w-full h-9 text-neutral-950 bg-white hover:bg-neutral-700  text-sm cursor-pointer rounded">
        Lihat Selengkapnya
      </button>
    </div>
  );
};

export default SummaryCardBlack;
