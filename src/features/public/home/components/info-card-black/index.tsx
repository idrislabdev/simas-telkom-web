// import { Progress } from "@/components/ui/progress";
import { mosqueData } from "@/mocks/mosqueData";

interface HomeInfoCardProps {
  /** URL gambar header (misal: "/images/icon-masjid.png") */
  imageSrc: string;
  /** Judul utama kartu */
  title: string;
  /** Deskripsi singkat di bawah judul */
  description?: string;
}

export const HomeInfoCardBlack = ({
  imageSrc,
  title,
  description = "",
}: HomeInfoCardProps) => {
  return (
    <div className="bg-white flex flex-col  p-4 gap-3 h-[500px]">
      {/* === Header === */}
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 rounded-full flex justify-center items-center  overflow-hidden border border-white bg-white">
          <img
            src={imageSrc}
            alt={title}
            className="w-12 h-12 object-contain"
          />
        </div>
        <div className="flex flex-col text-neutral-100">
          <h6 className="text-[17px]/[17px] font-medium">{title}</h6>
          {description && <span className="text-xs ">{description}</span>}
        </div>
      </div>

      <hr className="border-red-600" />

      {/* === Daftar Masjid === */}
      <div className="grid grid-cols-2 gap-3 overflow-y-auto custom-scrollbar p-2">
        {mosqueData.map((mosque) => (
          <div
            key={mosque.id}
            className="flex flex-col gap-1.5 bg-white shadow-custom-1 rounded p-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-17 h-17 flex justify-center items-center rounded">
                <img
                  src={mosque.image}
                  className="h-full object-cover rounded"
                  alt={mosque.name}
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium text-neutral-700 line-clamp-1">
                  {mosque.name}{" "}
                  <span className="text-xs"> ({mosque.location})</span>
                </label>
                <div className="flex flex-col gap-1 text-neutral-700">
                  <div className="flex flex-col">
                    <span className="text-xs">{mosque.address}</span>
                    <span className="text-xs">
                      Fasilitas: {mosque.completeness}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <a className=" cursor-pointer text-white hover:text-blue-700 w-full rounded flex flex-col justify-center items-center text-sm">
          Lihat Lebih Lengkap
        </a>
      </div>
    </div>
  );
};
