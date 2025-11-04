import FacilityAccordion from "@/features/public/masjid/components/facility-accordion";
import { facilities } from "@/mocks/facilities";
import { MapPin } from "lucide-react";

export const MasjidDetailProfile = () => {
  return (
    <div className="flex flex-col space-y-8 w-full">
      <div className="flex gap-3 h-80">
        {/* Kolom kiri */}
        <div className="w-2/3 h-full rounded-md overflow-hidden">
          <img
            src="/images/mosque-3.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Kolom kanan */}
        <div className="w-1/3 h-full flex flex-col gap-3">
          <div className="flex-1 rounded-md overflow-hidden">
            <img
              src="/images/mosque-1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 rounded-md overflow-hidden relative">
            <img
              src="/images/mosque-2.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center">
              <span className="text-4xl text-white">7+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-medium text-neutral-800">
            Masjid Takkhobar
          </h2>
          <div className="flex items-center gap-1 text-xs text-neutral-700">
            <MapPin size={16} /> SBU Ketintang, Surabaya, Jawa Timur
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-sm text-neutral-700 font-medium">
            Sejarah Masjid :
          </h5>
          <p className="text-xs text-justify text-neutral-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-sm text-neutral-700 font-medium">
            Fasilitas <span className="text-green-700">90%</span> :
          </h5>
          <div className="flex flex-col gap-2">
            {facilities
              .filter((x) => x.checked)
              .map((item, index: number) => (
                <FacilityAccordion item={item} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
