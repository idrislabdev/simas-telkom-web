import MasjidInfoCard from "@/features/public/masjid/components/info-card";
import { mosqueData } from "@/mocks/mosqueData";

const MasjidPage = () => {
  return (
    <div className="flex flex-col items-center py-20 space-y-5 px-10 max-w-[1536px] mx-auto">
      <div className="pr-2 py-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 s-1440:grid-cols-6 s-1600:grid-cols-7 s-1700:grid-cols-7 s-1900:grid-cols-8 gap-4 overflow-y-auto content-start custom-scrollbar">
        {mosqueData.map((mosque) => (
          <MasjidInfoCard item={mosque} key={mosque.id} />
        ))}
      </div>
    </div>
  );
};

export default MasjidPage;
