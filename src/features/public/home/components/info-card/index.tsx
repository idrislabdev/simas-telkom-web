// import { Progress } from "@/components/ui/progress";
import { Progress } from "@/components/ui/progress";
import { mosqueData } from "@/mocks/mosqueData";

interface HomeInfoCardProps {
  /** URL gambar header (misal: "/images/icon-masjid.png") */
  imageSrc: string;
  /** Judul utama kartu */
  title: string;
  /** Deskripsi singkat di bawah judul */
  description?: string;
}

export const HomeInfoCard = ({
  imageSrc,
  title,
  description = "",
}: HomeInfoCardProps) => {
  return (
    <div className="bg-white flex flex-col  p-4 gap-3 h-[500px]">
      {/* === Header === */}
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 rounded-full flex justify-center items-center  overflow-hidden border border-gray-200">
          <img
            src={imageSrc}
            alt={title}
            className="w-12 h-12 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h6 className="text-[17px]/[17px] font-medium">{title}</h6>
          {description && (
            <span className="text-xs text-neutral-400">{description}</span>
          )}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* === Daftar Masjid === */}
      <div className="grid grid-cols-2 gap-3 overflow-y-auto custom-scrollbar p-2">
        {mosqueData.map((mosque) => (
          <div
            key={mosque.id}
            className="flex flex-col gap-1.5 border border-gray-200 rounded p-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-17 h-17 flex justify-center items-center rounded border border-gray-200 bg-gray-200">
                <img
                  src={mosque.image}
                  className="h-full object-cover rounded"
                  alt={mosque.name}
                />
              </div>
              <div className="flex flex-col flex-1 gap-1">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-neutral-700 line-clamp-1">
                    {mosque.name}
                  </label>
                  <span className="text-xs text-neutral-500 line-clamp-1">
                    {mosque.location}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] text-neutral-700">
                      Fasilitas
                    </label>
                    <span className="text-[10px]">{mosque.completeness}%</span>
                  </div>
                  <Progress value={mosque.completeness} className="h-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <a className=" cursor-pointer text-blue-500 hover:text-blue-700 w-full rounded flex flex-col justify-center items-center text-sm">
          Lihat Lebih Lengkap
        </a>
      </div>
    </div>
  );
};
