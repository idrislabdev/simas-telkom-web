import SummaryCard from "@/features/public/home/components/summary-card";
import { useRef, useEffect, useState } from "react";
import { regional3Data } from "@/mocks/regional3Data";
import SummaryCardBlack from "@/features/public/home/components/summary-card-black";
import { ChevronDown, Search } from "lucide-react";
import { HomeInfoCard } from "@/features/public/home/components/info-card";
import HomeMapCard from "@/features/public/home/components/map-card";
import HomeArticleCard from "@/features/public/home/components/article-card";
import { articleData } from "@/mocks/articleData";

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
    <div className="flex flex-col items-center py-24 space-y-10 ">
      <div className="max-w-[1536px] mx-auto w-full px-10">
        <div
          className="w-full h-[425px] relative overflow-hidden rounded-2xl shadow-lg "
          ref={ref}
        >
          {/* Gambar parallax */}
          <div
            className="absolute inset-0 bg-cover bg-center will-change-transform transition-transform duration-200 ease-out"
            style={{
              backgroundImage: "url('/images/bg-masjid.jpg')",
              width: "100%",
              height: "750px",
              top: "-250px",
              transform: `translateY(${offsetY}px)`,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* Konten */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-10 p-10">
            <div className="flex flex-col gap-1 justify-center items-center text-center">
              <h1 className="text-3xl leading-10 font-medium text-white">
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
            <div className="relative w-[50%]">
              <input
                placeholder="cari data masjid / musholla"
                className="h-12 w-full rounded-md bg-white text-neutral-700 text-sm pl-4"
              />
              <button className="bg-red-500 text-white rounded-md h-10 absolute right-1 top-1 text-sm px-3 flex items-center gap-2">
                <Search size={16} /> Cari Data
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 max-w-[1536px] mx-auto px-10 ">
        <h5 className="text-sm text-neutral-500">Informasi / Jadwal Shalat</h5>
        <div className="flex items-center justify-center gap-12">
          <div className="flex justify-center items-center text-gray-700 gap-1">
            <label className="text-3xl leading-7 font-bold ">Subuh</label>
            <span>03:43</span>
          </div>
          <div className="flex justify-center items-center text-gray-700 gap-1">
            <label className="text-3xl leading-7 font-bold ">Dzuhur</label>
            <span>11:16</span>
          </div>
          <div className="flex justify-center items-center text-gray-700 gap-1">
            <label className="text-3xl leading-7 font-bold ">Ashar</label>
            <span>14:31</span>
          </div>
          <div className="flex justify-center items-center text-gray-700 gap-1">
            <label className="text-3xl leading-7 font-bold ">Maghrib</label>
            <span>17:27</span>
          </div>
          <div className="flex justify-center items-center text-gray-700 gap-1">
            <label className="text-3xl leading-7 font-bold ">Isya</label>
            <span>18:39</span>
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-200" />
      {/* Bagian data */}
      <div className=" max-w-[1536px] mx-auto px-10 w-full pb-20">
        <div className="bg-white shadow-custom-4 rounded-2xl p-10 relative w-full h-100">
          <div className="flex items-center justify-between">
            <div className="flex flex-col justify-center gap-2">
              <h2 className="font-semibold text-red-700">
                Ringkasan Informasi <br />{" "}
                <span className="text-3xl text-neutral-700">
                  Data Masjid dan Musholla
                </span>
              </h2>
              <p className="text-sm">
                Di wilayah (Witel) Telkom Regional 3 Jatim, Bali, Nusa Tenggara
              </p>
            </div>
            <button className="px-3 h-9 text-white bg-neutral-950 hover:bg-neutral-700 rounded-md text-sm cursor-pointer">
              Lihat Semua
            </button>
          </div>
          <div className="py-2 px-10 grid grid-cols-4 gap-4 justify-center  content-start custom-scrollbar w-full absolute bottom-[-100px] right-0">
            {regional3Data.slice(0, 3).map((item, index: number) => (
              <SummaryCard item={item} key={index} />
            ))}
            <SummaryCardBlack item={regional3Data[3]} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col p-8 gap-4 bg-neutral-100/80">
        <div className="flex items-center justify-between max-w-[1536px] mx-auto w-full">
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

        <div className="flex items-center max-w-[1536px] mx-auto  w-full divide-x divide-gray-200">
          <div className="w-1/2">
            <HomeInfoCard
              title="Data Masjid TREG 3"
              description="Informasi semua masjid di TREG 3"
              imageSrc="/images/mosque.png"
            />
          </div>
          <div className="w-1/2">
            <HomeInfoCard
              title="Data Mushalla TREG 3"
              description="Informasi semua mushalla di TREG 3"
              imageSrc="/images/musholla.png"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 max-w-[1536px] mx-auto px-10 w-full">
        <HomeMapCard />
      </div>
      <div className="max-w-[1536px] mx-auto w-full px-10">
        <div className="bg-gray-50 rounded-2xl p-10 flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl font-bold">Informasi Terkini</h2>
            <p className="text-sm text-neutral-700">
              informasi / berita terkini sekitar masjid Telkom Regional 3
            </p>
          </div>
          <div className="py-2 px-10 grid grid-cols-4 gap-4 justify-center  content-start custom-scrollbar w-full bottom-[-100px] right-0">
            {articleData.slice(0, 4).map((article) => (
              <HomeArticleCard item={article} key={article.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
