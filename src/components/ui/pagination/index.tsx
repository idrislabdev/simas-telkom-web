import React from "react";

interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  pageSizeOptions?: number[];
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 15, 25, 50],
}) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const startRow = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const endRow = Math.min(page * pageSize, total);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    onPageChange(p);
  };

  return (
    <div className="flex justify-between items-center py-2 px-4 border-t border-gray-200 text-sm">
      <div className="flex items-center gap-2 text-gray-500">
        Menampilkan
        <select
          value={pageSize}
          onChange={(e) => {
            onPageSizeChange(Number(e.target.value));
            onPageChange(1);
          }}
          className="border border-gray-300 rounded px-1 py-0.5 text-sm bg-white"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        data per halaman ({startRow}–{endRow} dari {total})
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => goToPage(1)}
          disabled={page === 1}
          className={`cursor-pointer px-2 py-1 border border-gray-200 rounded w-8 ${
            page === 1
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          {"<<"}
        </button>
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className={`px-2 py-1 border border-gray-200 rounded w-8 ${
            page === 1
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          {"<"}
        </button>

        {/* Tampilkan max 5 page number */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(Math.max(0, page - 3), Math.min(totalPages, page + 2))
          .map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`cursor-pointer px-3 py-1 rounded w-8 ${
                p === page
                  ? "bg-primary-400 text-neutral-900 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              {p}
            </button>
          ))}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className={`cursor-pointer px-2 py-1 border border-gray-200 rounded w-8 ${
            page === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          {">"}
        </button>
        <button
          onClick={() => goToPage(totalPages)}
          disabled={page === totalPages}
          className={`cursor-pointer px-2 py-1 border border-gray-200 rounded w-8 ${
            page === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};
