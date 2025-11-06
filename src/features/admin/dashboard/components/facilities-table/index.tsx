"use client";

import { useState } from "react";
import { BasicTable } from "@/components/ui/basic-table";
import { Progress } from "@/components/ui/progress";

export interface IMasjid {
  nama: string;
  tipe: string;
  didirikan: string;
  jumlahBKM: string;
  luasTanah: string;
  luasBangunan: string;
  dayaTampung: string;
  lokasi: string; // WITEL / STO
  kabKota: string;
  provinsi: string;
  alamat: string;
  email: string;
  wa: string;
  kelengkapan: number; // ✅ Tambahan
}

interface Column<T> {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
}

// 🧱 Mock data masjid Telkom se-Jawa Timur
const mockMasjidData: IMasjid[] = [
  {
    nama: "Masjid Takkhobar",
    tipe: "Masjid",
    didirikan: "2004",
    jumlahBKM: "10 Orang",
    luasTanah: "100 m²",
    luasBangunan: "100 m²",
    dayaTampung: "1.000",
    lokasi: "STO Ketintang - Witel Surabaya Selatan",
    kabKota: "Surabaya",
    provinsi: "Jawa Timur",
    alamat: "Jl. Ketintang Baru No. 20, Surabaya",
    email: "masjid.takkhobar@telkom.co.id",
    wa: "+628181018171",
    kelengkapan: 97,
  },
  {
    nama: "Masjid Al-Falah Telkom",
    tipe: "Masjid",
    didirikan: "2000",
    jumlahBKM: "12 Orang",
    luasTanah: "200 m²",
    luasBangunan: "180 m²",
    dayaTampung: "1.500",
    lokasi: "STO Darmo - Witel Surabaya Utara",
    kabKota: "Surabaya",
    provinsi: "Jawa Timur",
    alamat: "Jl. Raya Darmo No. 10, Surabaya",
    email: "alfalah.darmo@telkom.co.id",
    wa: "+6281234567890",
    kelengkapan: 92,
  },
  {
    nama: "Masjid Al-Hidayah",
    tipe: "Masjid",
    didirikan: "2010",
    jumlahBKM: "9 Orang",
    luasTanah: "130 m²",
    luasBangunan: "120 m²",
    dayaTampung: "800",
    lokasi: "STO Sidoarjo - Witel Sidoarjo",
    kabKota: "Sidoarjo",
    provinsi: "Jawa Timur",
    alamat: "Jl. Diponegoro No. 55, Sidoarjo",
    email: "alhidayah.sidoarjo@telkom.co.id",
    wa: "+6282233344455",
    kelengkapan: 84,
  },
  {
    nama: "Masjid Al-Amin",
    tipe: "Masjid",
    didirikan: "2012",
    jumlahBKM: "11 Orang",
    luasTanah: "160 m²",
    luasBangunan: "130 m²",
    dayaTampung: "900",
    lokasi: "STO Tandes - Witel Surabaya Barat",
    kabKota: "Surabaya",
    provinsi: "Jawa Timur",
    alamat: "Jl. Tandes No. 8, Surabaya",
    email: "alamin.tandes@telkom.co.id",
    wa: "+6281555566777",
    kelengkapan: 95,
  },
  {
    nama: "Masjid Baiturrahman",
    tipe: "Masjid",
    didirikan: "2015",
    jumlahBKM: "8 Orang",
    luasTanah: "140 m²",
    luasBangunan: "110 m²",
    dayaTampung: "700",
    lokasi: "STO Gresik - Witel Gresik",
    kabKota: "Gresik",
    provinsi: "Jawa Timur",
    alamat: "Jl. Dr. Wahidin Sudirohusodo No. 12, Gresik",
    email: "baiturrahman.gresik@telkom.co.id",
    wa: "+6281998877665",
    kelengkapan: 90,
  },
  {
    nama: "Masjid Al-Ikhlas",
    tipe: "Masjid",
    didirikan: "2016",
    jumlahBKM: "10 Orang",
    luasTanah: "120 m²",
    luasBangunan: "100 m²",
    dayaTampung: "600",
    lokasi: "STO Banyuwangi - Witel Banyuwangi",
    kabKota: "Banyuwangi",
    provinsi: "Jawa Timur",
    alamat: "Jl. A. Yani No. 40, Banyuwangi",
    email: "al-ikhlas.bwi@telkom.co.id",
    wa: "+6281888877444",
    kelengkapan: 82,
  },
  {
    nama: "Masjid Nurul Iman",
    tipe: "Masjid",
    didirikan: "2011",
    jumlahBKM: "13 Orang",
    luasTanah: "150 m²",
    luasBangunan: "130 m²",
    dayaTampung: "1.000",
    lokasi: "STO Malang - Witel Malang",
    kabKota: "Malang",
    provinsi: "Jawa Timur",
    alamat: "Jl. Basuki Rahmat No. 22, Malang",
    email: "nuruliman.mlg@telkom.co.id",
    wa: "+6281332211444",
    kelengkapan: 89,
  },
  {
    nama: "Masjid Al-Muttaqin",
    tipe: "Masjid",
    didirikan: "2005",
    jumlahBKM: "10 Orang",
    luasTanah: "180 m²",
    luasBangunan: "150 m²",
    dayaTampung: "1.200",
    lokasi: "STO Jember - Witel Jember",
    kabKota: "Jember",
    provinsi: "Jawa Timur",
    alamat: "Jl. Gajah Mada No. 18, Jember",
    email: "muttaqin.jember@telkom.co.id",
    wa: "+6282133344556",
    kelengkapan: 100,
  },
  {
    nama: "Masjid At-Taqwa",
    tipe: "Masjid",
    didirikan: "2003",
    jumlahBKM: "9 Orang",
    luasTanah: "170 m²",
    luasBangunan: "140 m²",
    dayaTampung: "900",
    lokasi: "STO Madiun - Witel Madiun",
    kabKota: "Madiun",
    provinsi: "Jawa Timur",
    alamat: "Jl. Pahlawan No. 77, Madiun",
    email: "attaqwa.madiun@telkom.co.id",
    wa: "+6281223344566",
    kelengkapan: 86,
  },
  {
    nama: "Masjid Al-Muhajirin",
    tipe: "Masjid",
    didirikan: "2018",
    jumlahBKM: "7 Orang",
    luasTanah: "110 m²",
    luasBangunan: "100 m²",
    dayaTampung: "500",
    lokasi: "STO Kediri - Witel Kediri",
    kabKota: "Kediri",
    provinsi: "Jawa Timur",
    alamat: "Jl. Brawijaya No. 5, Kediri",
    email: "almuhajirin.kediri@telkom.co.id",
    wa: "+628177889900",
    kelengkapan: 88,
  },
  {
    nama: "Masjid Al-Akbar Telkom",
    tipe: "Masjid Raya",
    didirikan: "2000",
    jumlahBKM: "20 Orang",
    luasTanah: "11.000 m²",
    luasBangunan: "8.000 m²",
    dayaTampung: "30.000",
    lokasi: "STO Gayungan - Witel Surabaya Selatan",
    kabKota: "Surabaya",
    provinsi: "Jawa Timur",
    alamat: "Jl. Masjid Al Akbar Timur No.1, Surabaya",
    email: "al-akbar@telkom.co.id",
    wa: "+628111223344",
    kelengkapan: 98,
  },
];

const FacilitiesTable = () => {
  const [data] = useState(mockMasjidData);

  const columns: Column<IMasjid>[] = [
    { key: "nama", label: "Nama Masjid" },
    { key: "lokasi", label: "Lokasi (Witel / STO)" },
    // { key: "kabKota", label: "Kab / Kota" },
    // { key: "provinsi", label: "Provinsi" },
    {
      key: "kelengkapan",
      label: "Kelengkapan (%)",
      render: (r) => (
        <div className="flex items-center gap-2">
          <Progress value={r.kelengkapan} className="h-1" />
          <span className="text-xs">{r.kelengkapan}%</span>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-md border border-gray-200 flex flex-col h-full">
      <div className="flex items-center p-2 border-b border-b-gray-200">
        <h5 className="text-sm font-medium text-neutral-700">
          Masjid / Mushalla (Fasilitas Belum Lengkap)
        </h5>
      </div>
      <BasicTable
        data={data}
        columns={columns}
        loading={false}
        page={1}
        pageSize={15}
      />
    </div>
  );
};

export default FacilitiesTable;
