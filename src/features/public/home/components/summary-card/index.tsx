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
const SummaryCard = (props: { item: WitelData }) => {
  const { item } = props;
  return (
    <div className="bg-white w-full shadow-custom-4  p-4 flex flex-col gap-4 max-w-sm">
      <div className="flex flex-col">
        <h5 className="text-red-700">Wilayah</h5>
        <p className="text-2xl font-bold text-neutral-900">{item.name}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[9px] text-neutral-500 font-light">
          Berdasarkan Data Keseluruhan
        </label>
        <ul className="flex flex-col gap-1 text-sm text-neutral-700">
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
        <label className="text-[9px] text-neutral-500 font-light">
          Berdasarkan Kelengkapan Fasilitas
        </label>
        <ul className="flex flex-col gap-1 text-sm text-neutral-700">
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
      <button className="w-full h-9 text-white bg-neutral-950 hover:bg-neutral-700  text-sm cursor-pointer">
        Lihat Selengkapnya
      </button>
    </div>
  );
};

export default SummaryCard;
