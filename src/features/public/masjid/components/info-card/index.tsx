export interface MosqueInfo {
  id: string;
  name: string;
  location: string;
  address: string;
  completeness: number; // Persentase kelengkapan data
  image: string;
}
const MasjidInfoCard = (props: { item: MosqueInfo }) => {
  const { item } = props;
  return (
    <div className="h-84 w-full rounded-md justify-between border border-gray-200 flex flex-col gap-2 bg-white">
      <div className="flex flex-col gap-2 rounded-tr-md rounded-tl-md">
        <img
          src={item.image}
          loading="lazy"
          className="h-50 w-full object-cover  rounded-tr-md rounded-tl-md"
        />

        <div className="flex flex-col gap-1  p-2">
          <div className="flex flex-col">
            <label className="line-clamp-2 font-medium text-neutral-700">
              {item.name}
            </label>
            <p className="text-sm">{item.location}</p>
          </div>
          <span className="text-xs text-neutral-700">{item.address}</span>

          <div className="flex items-center justify-between"></div>
        </div>
      </div>
    </div>
  );
};

export default MasjidInfoCard;
