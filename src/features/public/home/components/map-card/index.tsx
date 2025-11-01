"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";

// ✅ Import Select dari shadcn/ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IFilters {
  provinsi: string;
  kota: string;
  witel: string;
  jenis: string;
}

const SidebarSearch: React.FC<{
  onPlaceFound: (latlng: [number, number], label: string) => void;
  onFilterChange: (filters: IFilters) => void;
}> = ({ onPlaceFound, onFilterChange }) => {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const providerRef = useRef(new OpenStreetMapProvider());

  const [filters, setFilters] = useState<IFilters>({
    provinsi: "",
    kota: "",
    witel: "",
    jenis: "Masjid",
  });

  // ✅ Data Provinsi, Kota, dan Witel (Telkom Regional V)
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

  const handleFilterChange = (key: keyof IFilters, value: string) => {
    const updated = { ...filters, [key]: value };

    // reset dependent select
    if (key === "provinsi") {
      updated.kota = "";
      updated.witel = "";
    } else if (key === "kota") {
      updated.witel = "";
    }

    setFilters(updated);
    onFilterChange(updated);
  };

  const handleSearch = async () => {
    if (!q.trim()) return;
    setLoading(true);
    try {
      const results = await providerRef.current.search({ query: q });
      if (results && results.length > 0) {
        const r = results[0];
        onPlaceFound([Number(r.y), Number(r.x)], r.label ?? q);
      } else {
        alert("Lokasi tidak ditemukan.");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat pencarian.");
    } finally {
      setLoading(false);
    }
  };

  const currentProv = data[filters.provinsi as keyof typeof data];

  return (
    <div
      className="search-sidebar"
      style={{
        position: "absolute",
        top: 18,
        left: 18,
        width: 320,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        padding: 12,
        zIndex: 1000,
      }}
    >
      <h3 className="text-xl font-medium mb-3">Filter Data</h3>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="block mb-1 text-xs text-gray-600">Provinsi</label>
          <Select
            value={filters.provinsi}
            onValueChange={(v) => handleFilterChange("provinsi", v)}
          >
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
          <Select
            value={filters.kota}
            onValueChange={(v) => handleFilterChange("kota", v)}
            disabled={!filters.provinsi}
          >
            <SelectTrigger className="w-full rounded">
              <SelectValue placeholder="Pilih Kota / Kabupaten" />
            </SelectTrigger>
            <SelectContent>
              {currentProv?.kota.map((k) => (
                <SelectItem key={k} value={k}>
                  {k}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Witel */}
        <div className="flex flex-col">
          <label className="block mb-1 text-xs text-gray-600">Witel</label>
          <Select
            value={filters.witel}
            onValueChange={(v) => handleFilterChange("witel", v)}
            disabled={!filters.kota}
          >
            <SelectTrigger className="w-full rounded">
              <SelectValue placeholder="Pilih Witel" />
            </SelectTrigger>
            <SelectContent>
              {currentProv?.witel.map((w) => (
                <SelectItem key={w} value={w}>
                  {w}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="block mb-1 text-xs text-gray-600">Jenis</label>
          <Select
            value={filters.jenis}
            onValueChange={(v) => handleFilterChange("jenis", v)}
          >
            <SelectTrigger className="w-full rounded">
              <SelectValue placeholder="Pilih Jenis" />
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
            placeholder="Cari nama / lokasi..."
            value={q}
            onChange={(ev) => setQ(ev.target.value)}
            className="px-3 py-2 border rounded flex-1"
          />
        </div>
        <button
          type="button"
          onClick={handleSearch}
          disabled={loading}
          className="px-3 py-2 bg-green-600 text-white rounded"
        >
          {loading ? "…" : "Cari"}
        </button>
      </div>
    </div>
  );
};

// ⛳ Map auto-fly ketika hasil ditemukan
const FlyToWhenFound: React.FC<{
  position: [number, number] | null;
  zoom?: number;
}> = ({ position, zoom = 16 }) => {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, zoom, { duration: 0.8 });
  }, [map, position, zoom]);
  return null;
};

// 🚀 Pindahkan tombol zoom ke kanan atas
const MoveZoomControlTopRight: React.FC = () => {
  const map = useMap();
  useEffect(() => {
    map.zoomControl.setPosition("topright");
  }, [map]);
  return null;
};

const HomeMapCard: React.FC = () => {
  const [found, setFound] = useState<{
    latlng: [number, number];
    label: string;
  } | null>(null);

  const [filters, setFilters] = useState<IFilters>({
    provinsi: "",
    kota: "",
    witel: "",
    jenis: "Masjid",
  });

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <div
      className="bg-white rounded-md h-[600px] w-full flex shadow-sm p-8"
      style={{ position: "relative" }}
    >
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={{ lat: -8.108, lng: 114.26 }}
        zoom={7}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <MoveZoomControlTopRight />

        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <SidebarSearch
          onPlaceFound={(latlng, label) => setFound({ latlng, label })}
          onFilterChange={(f) => setFilters(f)}
        />

        {found && (
          <>
            <Marker position={found.latlng as L.LatLngExpression}>
              <Popup>{found.label}</Popup>
            </Marker>
            <FlyToWhenFound position={found.latlng} zoom={16} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default HomeMapCard;
