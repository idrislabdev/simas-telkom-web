import { MasjidDetailProfile } from "@/features/public/masjid/components/detail/gallery";
import { facilities } from "@/mocks/facilities";
import {
  Building,
  CheckCircle,
  CircleX,
  Image,
  Map,
  MapPin,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const MasjidDetailPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const elementTop = rect.top + scrollTop;
      const scrollPosition = window.scrollY - elementTop;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(scrollPosition * 0.4);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex flex-col py-24 space-y-6">
      <div className="max-w-[1536px] mx-auto w-full px-10">
        <div className="w-full h-[375px] shadow-custom-6 rounded-md p-2">
          <div
            className="w-full h-[275px] relative overflow-hidden rounded-tr-md rounded-tl-md shadow-lg "
            ref={ref}
          >
            {/* Gambar parallax */}
            <div
              className="absolute inset-0 bg-cover bg-center will-change-transform transition-transform duration-200 ease-out"
              style={{
                backgroundImage: "url('/images/bg-masjid.jpg')",
                width: "100%",
                height: "750px",
                top: "-300px",
                transform: `translateY(${offsetY}px)`,
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25"></div>
          </div>
          <div className="w-full h-[100px] flex gap-4 items-start relative">
            <div className="w-40 relative">
              <div className="w-[120px] h-[120px] p-2 bg-white absolute -top-10 right-0  rounded">
                <img src="/images/mosque-1.jpg" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 pt-2">
              <h5 className="text-2xl text-neutral-700 font-medium">
                Masjid Takkhobar
              </h5>
              <div className="flex items-center gap-8 text-neutral-500 text-sm">
                <p className="flex items-center gap-1">
                  <Building size={18} /> SBU Ketintang
                </p>
                <span className="flex items-center gap-1">
                  <MapPin size={18} /> Surabaya
                </span>
                <span className="flex items-center gap-1">
                  <Map size={18} /> Jawa Timur
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1536px] mx-auto w-full px-10 flex items-center gap-4">
        <button className="bg-red-500 text-white font-medium text-sm rounded px-3 py-2 flex gap-1 items-center shadow-custom-6 cursor-pointer">
          <Building size={18} /> Profil Masjid
        </button>
        <button className="text-neutral-700 font-medium text-sm rounded px-3 py-2 flex gap-1 items-center cursor-pointer hover:bg-red-500/20 transition-all duration-300 hover:text-blue-500">
          <Image size={18} /> Galeri / Foto
        </button>
        <button className="text-neutral-700 font-medium text-sm rounded px-3 py-2 flex gap-1 items-center cursor-pointer hover:bg-red-500/20 transition-all duration-300 hover:text-blue-500">
          <Users size={18} /> Informasi BKM
        </button>
      </div>
      <div className="max-w-[1536px] mx-auto w-full px-10 ">
        <div className="flex gap-4 w-full">
          <div className="w-72">
            <div className="flex flex-col gap-3 rounded-md shadow-custom-6 p-4 h-fit sticky top-28 bg-white z-20">
              <div className="flex flex-col gap-2 text-neutral-700">
                <label className="text-xs text-neutral-400 uppercase">
                  Profil
                </label>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">Nama</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> Masjid Takkhobar</span>
                </div>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">Tipe</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> Masjid</span>
                </div>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">Didirikan</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> Tahun 2004</span>
                </div>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">Jumlah BKM</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> 10 Orang</span>
                </div>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">Luas Tanah</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1 flex">
                    100 m<span className="text-[10px]">2</span>
                  </span>
                </div>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">
                    Luas Bangunan
                  </label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1 flex">
                    100 m<span className="text-[10px]">2</span>
                  </span>
                </div>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">
                    Daya Tampung
                  </label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1 flex">1.000</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-neutral-700">
                <label className="text-xs text-neutral-400 uppercase">
                  Alamat
                </label>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">Lokasi</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> SBU Ketintang</span>
                </div>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">
                    Kab. / Kota
                  </label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> Surabaya</span>
                </div>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">Provinsi</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> Jawa Timur</span>
                </div>
                <div className="flex gap-0.5 text-neutral-700">
                  <label className="w-26 font-medium text-xs">Alamat</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1">
                    Jl. Ketintang Baru No. 20, Surabaya, Jawa Timur
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-neutral-700">
                <label className="text-xs text-neutral-400 uppercase">
                  Kontak
                </label>
                <div className="flex items-center">
                  <label className="w-26 font-medium text-xs">Email</label>
                  <span className="text-xs flex-1">: masji@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <label className="w-26 font-medium text-xs">WA</label>
                  <span className="text-xs flex-1">: +628181018171</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-neutral-700">
                <label className="text-xs text-neutral-400 uppercase">
                  Fasilitas{" "}
                  <span className="text-green-700 font-medium">90%</span>
                </label>
                <div className="flex items-center flex-wrap gap-2 text-xs text-neutral-700">
                  {facilities.map((item, index: number) => (
                    <div
                      className={`flex items-center gap-1 rounded text-white p-1 ${
                        item.checked ? "bg-blue-500" : "bg-red-500"
                      }`}
                      key={index}
                    >
                      {item.name}
                      {item.checked && <CheckCircle size={14} />}
                      {!item.checked && <CircleX size={14} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-custom-6 rounded-md flex flex-col justify-center items-center p-4">
            <div className=" flex flex-col border border-gray-200 w-full h-full rounded p-4">
              <MasjidDetailProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
