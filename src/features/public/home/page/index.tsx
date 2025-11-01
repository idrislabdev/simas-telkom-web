import { HomeBKMCard } from "@/features/public/home/components/bkm-card";
import { HomeInfoCard } from "@/features/public/home/components/info-card";
import HomeMapCard from "@/features/public/home/components/map-card";
import { ChevronDown, Search } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function HomePage() {
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
          setOffsetY(scrollPosition * 0.4); // kecepatan parallax
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center pt-24 space-y-5 px-10 max-w-[1536px] mx-auto">
      <div
        className="w-full h-[325px] relative overflow-hidden rounded-2xl shadow-lg"
        ref={ref}
      >
        {/* Gambar parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform transition-transform duration-200 ease-out"
          style={{
            backgroundImage: "url('/images/mosque-wallpaper.jpg')",
            width: "100%",
            height: "700px",
            top: "-250px",
            transform: `translateY(${offsetY}px)`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"></div>

        {/* Konten */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-10">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl leading-10 font-medium text-white drop-shadow-md">
              Sistem Informasi Manajemen Masjid{" "}
              <span className="font-semibold">(SIMAS)</span>
              <br />
              Majelis Taklim Telkom Group{" "}
              <span className="font-semibold">(MTTG)</span>
            </h1>
            <p className="text-white">
              Telkom Regional 3 (Jawa Timur, Bali dan Nusa Tenggara)
            </p>
          </div>

          <div className="flex flex-col gap-2 font-light">
            <label className="text-white">Informasi Tentang Kami</label>
            <div className="flex items-center gap-4">
              <a className="bg-white py-3 px-4 rounded-md text-neutral-700 font-medium cursor-pointer hover:bg-neutral-100 transition">
                Majelis Taklim Telkom Group (MTTG)
              </a>
              <a className="bg-red-500 py-3 px-4 rounded-md text-white font-medium cursor-pointer hover:bg-red-600 transition">
                Aplikasi SIMAS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian data */}
      <div className="bg-white rounded-md w-full flex flex-col p-8 gap-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-neutral-700 text-sm">
            Cek profil masjid / mushalla / BKM
          </h5>
          <div className="flex items-center gap-2">
            <button className="bg-gray-200 border border-gray-400 text-xs text-neutral-700 flex items-center gap-2 py-1.5 px-4 rounded hover:bg-gray-300 transition">
              Provinsi: Jawa Timur
              <ChevronDown size={16} />
            </button>
            <button className="bg-gray-200 border border-gray-400 text-xs text-neutral-700 flex items-center gap-2 py-1.5 px-4 rounded hover:bg-gray-300 transition">
              Surabaya
              <ChevronDown size={16} />
            </button>
            <button className="bg-gray-200 border border-gray-400 text-xs text-neutral-700 flex items-center gap-2 py-1.5 px-4 rounded hover:bg-gray-300 transition">
              Masjid
              <ChevronDown size={16} />
            </button>
            <button className="bg-white border border-gray-400 text-xs text-neutral-700 flex items-center gap-2 py-1.5 px-4 rounded hover:bg-gray-300 transition">
              <Search size={16} />
              Cari data
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <HomeInfoCard
            title="Data Masjid TREG 3"
            description="Informasi semua masjid di TREG 3"
            imageSrc="/images/mosque.png"
          />
          <HomeInfoCard
            title="Data Mushalla TREG 3"
            description="Informasi semua mushalla di TREG 3"
            imageSrc="/images/musholla.png"
          />
          <HomeBKMCard
            title="Data BKM"
            description="Informasi badan kemakmuran masjid"
            imageSrc="/images/ikhwan.png"
          />
        </div>
      </div>

      {/* Placeholder konten bawah */}
      <HomeMapCard />
    </div>
  );
}
