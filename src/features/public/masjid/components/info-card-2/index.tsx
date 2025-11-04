import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

export interface MosqueInfo {
  id: string;
  name: string;
  location: string;
  address: string;
  completeness: number;
  image: string;
}

const MasjidInfoCard2 = ({ item }: { item: MosqueInfo }) => {
  return (
    <Link
      to={`/masjid/id`}
      className="relative w-full max-w-sm rounded-md p-2 shadow-custom-4"
    >
      {/* Bagian gambar */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-42 object-cover  rounded-md"
          loading="lazy"
        />
      </div>

      {/* Bagian deskripsi */}
      <div className="h-36 flex-1 relative z-10 bg-white p-2 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600">{item.location}</p>
          <p className="text-xs text-gray-500 line-clamp-2">{item.address}</p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="text-xs text-neutral-700">Fasilitas</label>
            <span className="text-xs">{item.completeness}%</span>
          </div>
          <Progress value={item.completeness} className="h-1" />
        </div>
      </div>
    </Link>
  );
};

export default MasjidInfoCard2;
