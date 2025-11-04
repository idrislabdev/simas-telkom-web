import { facilities } from "@/mocks/facilities";
import { CheckCircle, CircleX } from "lucide-react";
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
    <div className="flex flex-col items-center py-24 space-y-8">
      <div className="max-w-[1536px] mx-auto w-full px-10 ">
        <div
          className="w-full h-[325px] relative overflow-hidden rounded-2xl shadow-lg "
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

          {/* Konten */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-10 p-10">
            <div className="flex flex-col gap-1 justify-center items-center text-center">
              <h1 className="text-5xl leading-10 font-medium text-white drop-shadow-md bg-neutral-950/70 px-4 py-1">
                Masjid Takkhobar
              </h1>
              <p className="text-4xl text-white font-medium">(SBU Ketintang)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1536px] mx-auto w-full px-10 ">
        <div className="flex items-center gap-4 w-full">
          <div className="w-72">
            <div className="flex flex-col gap-4 rounded-md shadow-custom-4 p-4 h-fit sticky top-28 bg-white z-20">
              <div className="flex flex-col gap-1 text-neutral-700">
                <label className="text-sm font-medium text-neutral-800">
                  Profil
                </label>
                <hr />
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">Nama</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> Masjid Takkhobar</span>
                </div>
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">Tipe</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> Masjid</span>
                </div>
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">Didirikan</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> Tahun 2004</span>
                </div>
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">Jumlah BKM</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> 10 Orang</span>
                </div>
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">Luas Tanah</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1 flex">
                    100 m<span className="text-[10px]">2</span>
                  </span>
                </div>
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">
                    Luas Bangunan
                  </label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1 flex">
                    100 m<span className="text-[10px]">2</span>
                  </span>
                </div>
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">
                    Daya Tampung
                  </label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1 flex">1.000</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-neutral-700">
                <label className="text-sm font-medium text-neutral-800">
                  Alamat
                </label>
                <hr />
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">Lokasi</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> SBU Ketintang</span>
                </div>
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">
                    Kab. / Kota
                  </label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> Surabaya</span>
                </div>
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">Provinsi</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1"> Jawa Timur</span>
                </div>
                <div className="flex gap-0.5">
                  <label className="w-26 font-medium text-xs">Alamat</label>
                  <span className="text-xs w-1">:</span>
                  <span className="text-xs flex-1">
                    Jl. Ketintang Baru No. 20, Surabaya, Jawa Timur
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-neutral-700">
                <label className="text-sm font-medium text-neutral-800">
                  Kontak
                </label>
                <hr />
                <div className="flex items-center">
                  <label className="w-26 font-medium text-xs">Email</label>
                  <span className="text-xs flex-1">: masji@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <label className="w-26 font-medium text-xs">WA</label>
                  <span className="text-xs flex-1">: +628181018171</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-neutral-700">
                <label className="gap-1 text-sm font-medium text-neutral-800">
                  Kelengkapan{" "}
                  <span className="text-green-600 text-xs">90%</span>
                </label>
                <hr />
                <ul className="flex flex-col gap-2 text-xs text-neutral-700">
                  {facilities.map((item, index: number) => (
                    <li className="flex items-center gap-1" key={index}>
                      {item.name}
                      {item.checked && (
                        <span className="text-blue-600">
                          <CheckCircle size={14} />
                        </span>
                      )}
                      {!item.checked && (
                        <span className="text-red-600">
                          <CircleX size={14} />
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
