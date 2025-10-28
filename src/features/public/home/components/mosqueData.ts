// src/data/mosqueData.ts

export interface MosqueInfo {
  id: string;
  name: string;
  location: string;
  completeness: number; // Persentase kelengkapan data
}

export const mosqueData: MosqueInfo[] = [
  {
    id: "1",
    name: "Masjid Takkhobar (SBU Ketintang)",
    location: "Surabaya",
    completeness: 90,
  },
  {
    id: "2",
    name: "Masjid Al-Ikhlas (Witel Malang)",
    location: "Malang",
    completeness: 75,
  },
  {
    id: "3",
    name: "Masjid Baiturrahman (STO Banyuwangi)",
    location: "Banyuwangi",
    completeness: 100,
  },
  {
    id: "4",
    name: "Masjid Al-Muttaqin (SBU Sidoarjo)",
    location: "Sidoarjo",
    completeness: 65,
  },
  {
    id: "5",
    name: "Masjid Nurul Huda (Witel Kediri)",
    location: "Kediri",
    completeness: 82,
  },
  {
    id: "6",
    name: "Masjid Al-Falah (Witel Madiun)",
    location: "Madiun",
    completeness: 88,
  },
  {
    id: "7",
    name: "Masjid At-Taqwa (STO Blitar)",
    location: "Blitar",
    completeness: 70,
  },
  {
    id: "8",
    name: "Masjid Darussalam (SBU Mojokerto)",
    location: "Mojokerto",
    completeness: 92,
  },
  {
    id: "9",
    name: "Masjid Al-Hidayah (Witel Jember)",
    location: "Jember",
    completeness: 77,
  },
  {
    id: "10",
    name: "Masjid Al-Amin (STO Pasuruan)",
    location: "Pasuruan",
    completeness: 85,
  },
];
