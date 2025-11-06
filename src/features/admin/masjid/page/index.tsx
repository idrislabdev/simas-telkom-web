"use client";

import { useState } from "react";
import {
  ChevronRight,
  Download,
  Home,
  PencilLine,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { Link } from "react-router-dom";

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
  },
];

const AdminMasjidPage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [data, setData] = useState(mockMasjidData);

  const handleEdit = (m: IMasjid) => {
    alert(`Edit data: ${m.nama}`);
  };

  const handleDelete = (nama: string) => {
    if (confirm(`Hapus data masjid "${nama}"?`)) {
      setData((prev) => prev.filter((d) => d.nama !== nama));
    }
  };

  const columns: Column<IMasjid>[] = [
    { key: "nama", label: "Nama Masjid" },
    { key: "lokasi", label: "Lokasi (Witel / STO)" },
    { key: "kabKota", label: "Kab / Kota" },
    { key: "provinsi", label: "Provinsi" },
    { key: "wa", label: "Kontak", render: (r) => r.wa },
  ];

  return (
    <div className="bg-white rounded-md border border-gray-200 flex flex-col h-full">
      <div className="flex items-center">
        <nav className="px-4 py-2 border-b border-b-gray-200 flex items-center gap-2 w-full">
          <Link
            to="/"
            className="flex items-center hover:text-primary-500 text-neutral-700"
          >
            <Home size={16} />
          </Link>
          <ChevronRight size={16} className="text-neutral-400" />
          <span className="text-sm font-semibold text-neutral-700">
            Data Masjid
          </span>
        </nav>
      </div>
      <div className="flex justify-between items-center p-3 bg-white">
        {/* Search */}
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Cari data..."
            className="pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded w-full focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          {/* Export */}
          <button className="flex items-center gap-1 text-sm border border-gray-300 rounded px-3 py-1.5 bg-white hover:bg-gray-50 disabled:opacity-60 cursor-pointer">
            <Download size={16} /> Export
          </button>

          <button className="flex items-center gap-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1.5 cursor-pointer">
            <Plus size={16} /> Tambah
          </button>
        </div>
      </div>
      <DataTable
        data={data}
        columns={columns}
        loading={false}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
        actions={(row) => (
          <div className="flex justify-center gap-1">
            <button
              onClick={() => handleEdit(row)}
              title="Edit"
              className="bg-white hover:bg-gray-200 border border-gray-200 text-neutral-600 rounded w-6 h-6 flex items-center justify-center"
            >
              <PencilLine size={14} />
            </button>
            <button
              onClick={() => handleDelete(row.nama)}
              title="Hapus"
              className="bg-red-500 hover:bg-red-700 text-white rounded w-6 h-6 flex items-center justify-center"
            >
              <Trash2 size={14} />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default AdminMasjidPage;
