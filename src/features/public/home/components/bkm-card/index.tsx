import { bkmData } from "@/mocks/bkmData";

interface HomeBKMCardProps {
  /** URL gambar header (misal: "/images/icon-masjid.png") */
  imageSrc: string;
  /** Judul utama kartu */
  title: string;
  /** Deskripsi singkat di bawah judul */
  description?: string;
}

export const HomeBKMCard = ({
  imageSrc,
  title,
  description = "",
}: HomeBKMCardProps) => {
  return (
    <div className="w-1/3 bg-blue-50 flex flex-col rounded-md p-4 gap-3 h-[400px]">
      {/* === Header === */}
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 rounded-full flex justify-center items-center  overflow-hidden border border-gray-200">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-contain"
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
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto custom-scrollbar">
        {bkmData.map((bkm) => (
          <div key={bkm.id} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 flex justify-center items-center rounded border border-gray-200 bg-gray-200">
                <img
                  src="/images/no-image.png"
                  className="w-8 object-contain"
                  alt={bkm.name}
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium text-neutral-700 line-clamp-1">
                  {bkm.name}
                </label>
                <p className="text-xs text-neutral-500 line-clamp-1">
                  {bkm.location}
                </p>
                <span className="text-xs font-medium text-green-700">
                  {bkm.member} Orang
                </span>
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
