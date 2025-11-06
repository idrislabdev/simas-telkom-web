"use client";

import React from "react";
import { Loader2, TriangleAlert } from "lucide-react";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  align?: "left" | "center" | "right";
  render?: (row: T, index: number) => React.ReactNode;
  width?: string | number;
}

interface BasicTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  page: number;
  pageSize: number;
  actions?: (row: T) => React.ReactNode;
  emptyMessage?: string;
}

export function BasicTable<T>({
  data,
  columns,
  loading,
  page,
  pageSize,
  actions,
  emptyMessage = "Belum ada data",
}: BasicTableProps<T>) {
  const paginatedData = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Table scroll wrapper */}
      <div className="relative flex-1 overflow-x-auto overflow-y-auto max-h-80 custom-scrollbar">
        <table className="min-w-full text-sm border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={`text-${
                    col.align ?? "left"
                  } font-medium text-[11px] py-2 px-3 whitespace-nowrap bg-gray-50`}
                  style={{ width: col.width }}
                >
                  {col.label}
                </th>
              ))}
              {actions && (
                <th className="text-center font-medium text-[11px] py-2 px-3 w-24 whitespace-nowrap bg-gray-50">
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
                  className="hover:bg-neutral-50 border-b border-gray-100"
                >
                  {columns.map((col) => (
                    <td
                      key={String(col.key)}
                      className={`py-1.5 px-3 text-[11px] text-${
                        col.align ?? "left"
                      } whitespace-nowrap`}
                    >
                      {col.render
                        ? col.render(row, idx)
                        : (row as any)[col.key]}
                    </td>
                  ))}
                  {actions && (
                    <td className="py-1.5 px-3 text-center text-[11px] whitespace-nowrap">
                      {actions(row)}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
