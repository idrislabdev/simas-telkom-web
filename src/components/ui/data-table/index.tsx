"use client";

import React from "react";
import { Loader2, TriangleAlert } from "lucide-react";
import { Pagination } from "@/components/ui/pagination";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  align?: "left" | "center" | "right";
  render?: (row: T, index: number) => React.ReactNode;
  width?: string | number;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  page: number;
  pageSize: number;
  total?: number;
  onPageChange: (p: number) => void;
  onPageSizeChange: (s: number) => void;
  actions?: (row: T) => React.ReactNode;
  emptyMessage?: string;
}

/**
 * 🧾 Komponen Tabel Generik
 * - Reusable untuk berbagai tipe data
 * - Dapat menerima kolom dinamis & custom render
 * - Sudah ada state loading, empty, dan pagination
 */
export function DataTable<T>({
  data,
  columns,
  loading,
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  actions,
  emptyMessage = "Belum ada data",
}: DataTableProps<T>) {
  const paginatedData = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  return (
    <div className="flex-1 flex flex-col">
      {/* Table */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <table className="w-full text-sm rounded">
          <thead>
            <tr className="bg-gray-50 border-y border-gray-200">
              <th className="text-left font-medium text-xs py-1 px-2 w-10">
                #
              </th>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={`text-${
                    col.align ?? "left"
                  } font-medium text-xs py-1 px-2`}
                  style={{ width: col.width }}
                >
                  {col.label}
                </th>
              ))}
              {actions && (
                <th className="text-center font-medium text-xs py-1 px-2 w-24">
                  Aksi
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length + 2}
                  className="py-10 text-center text-gray-400"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="animate-spin text-gray-400" size={20} />
                    Memuat data...
                  </div>
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 2}
                  className="py-10 text-center text-gray-400"
                >
                  <div className="flex flex-col items-center gap-1">
                    <TriangleAlert size={48} />
                    {emptyMessage}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-neutral-50 border-b border-gray-200"
                >
                  <td className="py-1 px-2 text-center text-xs">
                    {(page - 1) * pageSize + idx + 1}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={String(col.key)}
                      className={`py-1 px-2 text-xs text-${
                        col.align ?? "left"
                      }`}
                    >
                      {col.render
                        ? col.render(row, idx)
                        : (row as any)[col.key]}
                    </td>
                  ))}
                  {actions && (
                    <td className="py-1 px-2 text-center text-xs">
                      {actions(row)}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        page={page}
        pageSize={pageSize}
        total={total ?? data.length}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
}
