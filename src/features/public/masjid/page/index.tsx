"use client";

import MasjidInfoCard2 from "@/features/public/masjid/components/info-card-2";
import { mosqueData } from "@/mocks/mosqueData";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MasjidPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  // --- DATA PILIHAN ---
  const data = {
    "Jawa Timur": {
      kota: ["Surabaya", "Malang", "Jember", "Madiun", "Kediri", "Banyuwangi"],
      witel: [
        "Witel Surabaya",
        "Witel Malang",
        "Witel Jember",
        "Witel Madiun",
        "Witel Kediri",
        "Witel Banyuwangi",
      ],
    },
    Bali: {
      kota: ["Denpasar", "Badung", "Tabanan"],
      witel: ["Witel Bali"],
    },
    "Nusa Tenggara Barat": {
      kota: ["Mataram", "Bima", "Sumbawa"],
      witel: ["Witel NTB"],
    },
    "Nusa Tenggara Timur": {
      kota: ["Kupang", "Ende", "Maumere"],
      witel: ["Witel NTT"],
    },
  };

  // --- STATE FILTER ---
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [witel, setWitel] = useState("");
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  // --- City/Witel Options Berdasarkan Provinsi ---
  const cityOptions = province ? data[province as keyof typeof data].kota : [];
  const witelOptions = province
    ? data[province as keyof typeof data].witel
    : [];

  // --- Parallax Effect ---
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

  // --- Reset Filter ---
  const handleReset = () => {
    setProvince("");
    setCity("");
    setWitel("");
    setType("");
    setSearch("");
  };

  // --- Filtered Data ---
  const filteredData = mosqueData.filter((mosque) => {
    return (
      (!province ||
        mosque.location.toLowerCase().includes(province.toLowerCase())) &&
      (!city || mosque.address.toLowerCase().includes(city.toLowerCase())) &&
      (!witel || mosque.location.toLowerCase().includes(witel.toLowerCase())) &&
      (!type || mosque.name.toLowerCase().includes(type.toLowerCase())) &&
      (!search || mosque.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="flex flex-col items-center py-24 space-y-8 ">
      <div className="max-w-[1536px] mx-auto w-full px-10">
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
              <h1 className="text-3xl leading-10 font-medium text-white drop-shadow-md">
                Data Masjid Telkom Regional 3
              </h1>
              <p className="text-white">
                Telkom Regional 3 (Jawa Timur, Bali, dan Nusa Tenggara)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1536px] mx-auto w-full px-10 flex gap-4">
        {/* Filter data */}
        <div className="w-72">
          <div className="flex flex-col gap-3 rounded-md shadow-custom-4 p-4 h-fit sticky top-28 bg-white z-20">
            <div className="flex flex-col gap-1">
              <label className="block mb-1 text-xs text-gray-600">
                Provinsi
              </label>
              <Select value={province} onValueChange={setProvince}>
                <SelectTrigger className="w-full rounded">
                  <SelectValue placeholder="Pilih Provinsi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Jawa Timur">Jawa Timur</SelectItem>
                  <SelectItem value="Bali">Bali</SelectItem>
                  <SelectItem value="Nusa Tenggara Barat">
                    Nusa Tenggara Barat
                  </SelectItem>
                  <SelectItem value="Nusa Tenggara Timur">
                    Nusa Tenggara Timur
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="block mb-1 text-xs text-gray-600">
                Kota / Kabupaten
              </label>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="w-full rounded">
                  <SelectValue placeholder="Pilih Kota / Kabupaten" />
                </SelectTrigger>
                <SelectContent>
                  {cityOptions.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Witel */}
            <div className="flex flex-col">
              <label className="block mb-1 text-xs text-gray-600">Witel</label>
              <Select value={witel} onValueChange={setWitel}>
                <SelectTrigger className="w-full rounded">
                  <SelectValue placeholder="Pilih Witel" />
                </SelectTrigger>
                <SelectContent>
                  {witelOptions.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="block mb-1 text-xs text-gray-600">
                Kelengkapan
              </label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="w-full rounded">
                  <SelectValue placeholder="Pilih Kelengkapan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Masjid">Masjid</SelectItem>
                  <SelectItem value="Musholla">Musholla</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="block mb-1 text-xs text-gray-600">Cari</label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama / lokasi..."
                className="px-3 py-1 border rounded flex-1"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded w-full"
              >
                Reset
              </button>
              <button
                type="button"
                className="px-3 py-1 bg-green-600 text-white rounded w-full"
              >
                Cari
              </button>
            </div>
          </div>
        </div>

        {/* List Masjid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 s-1440:grid-cols-4 s-1600:grid-cols-5 gap-4 content-start custom-scrollbar">
          {filteredData.length > 0 ? (
            filteredData.map((mosque) => (
              <MasjidInfoCard2 item={mosque} key={mosque.id} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full py-10">
              Tidak ada data yang sesuai filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MasjidPage;
