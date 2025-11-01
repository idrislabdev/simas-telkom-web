"use client";

import MasjidInfoCard from "@/features/public/masjid/components/info-card";
import { mosqueData } from "@/mocks/mosqueData";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col items-center pt-24 space-y-5 px-10 max-w-[1536px] mx-auto">
      {/* --- PARALLAX HEADER --- */}
      <div
        className="w-full h-[325px] relative overflow-hidden rounded-2xl shadow-lg"
        ref={ref}
      >
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

        <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />

        <div className="relative z-10 w-full h-full flex flex-col justify-center p-10 text-center">
          <h1 className="text-3xl leading-10 font-medium text-white drop-shadow-md">
            Data Masjid Telkom Regional 3
          </h1>
          <p className="text-white">
            Telkom Regional 3 (Jawa Timur, Bali, dan Nusa Tenggara)
          </p>
        </div>
      </div>

      {/* --- FILTER SECTION --- */}
      <div className="w-full bg-white rounded-xl border border-gray-300 p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Provinsi */}
          <Select
            value={province}
            onValueChange={(value) => {
              setProvince(value);
              setCity("");
              setWitel("");
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Provinsi" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(data).map((prov) => (
                <SelectItem key={prov} value={prov}>
                  {prov}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Kota */}
          <Select
            value={city}
            onValueChange={(value) => setCity(value)}
            disabled={!province}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Kota" />
            </SelectTrigger>
            <SelectContent>
              {cityOptions.map((kota) => (
                <SelectItem key={kota} value={kota}>
                  {kota}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Witel */}
          <Select
            value={witel}
            onValueChange={(value) => setWitel(value)}
            disabled={!province}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Witel" />
            </SelectTrigger>
            <SelectContent>
              {witelOptions.map((w) => (
                <SelectItem key={w} value={w}>
                  {w}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Tipe */}
          <Select value={type} onValueChange={(value) => setType(value)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Tipe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="masjid">Masjid</SelectItem>
              <SelectItem value="musholla">Musholla</SelectItem>
            </SelectContent>
          </Select>

          {/* Pencarian */}
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama masjid..."
            className="w-[200px]"
          />
        </div>

        {/* Tombol Reset */}
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            onClick={handleReset}
            className="text-sm font-medium"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* --- GRID DATA --- */}
      <div className="py-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 s-1440:grid-cols-4 s-1600:grid-cols-4 gap-6 overflow-y-auto content-start custom-scrollbar w-full">
        {filteredData.length > 0 ? (
          filteredData.map((mosque) => (
            <MasjidInfoCard item={mosque} key={mosque.id} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full py-10">
            Tidak ada data yang sesuai filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default MasjidPage;
