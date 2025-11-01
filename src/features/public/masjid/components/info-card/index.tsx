export interface MosqueInfo {
  id: string;
  name: string;
  location: string;
  address: string;
  completeness: number;
  image: string;
}

const MasjidInfoCard = ({ item }: { item: MosqueInfo }) => {
  return (
    <div className="relative w-full max-w-sm ">
      {/* Bagian gambar */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-52 object-cover  rounded-tr-2xl rounded-tl-2xl"
          loading="lazy"
        />
      </div>

      {/* Bagian deskripsi */}
      <div className="-mt-6 h-52  flex-1 relative z-10 bg-white rounded-2xl shadow-custom-5 p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {item.name}
        </h3>
        <p className="text-base text-gray-600">{item.location}</p>
        <p className="text-sm text-gray-500 line-clamp-2">{item.address}</p>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Kelengkapan: {item.completeness}%
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-full text-[10px] px-3 py-2">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default MasjidInfoCard;
