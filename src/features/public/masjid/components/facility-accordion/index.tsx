"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface IFacility {
  name: string;
  images: string[];
  checked: boolean;
}

const FacilityAccordion = ({ item }: { item: IFacility }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded overflow-hidden bg-gray-50 border border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-gray-50 transition cursor-pointer"
      >
        {item.name}
        <span
          className={`transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={18} />
        </span>
      </button>

      {open && (
        <div className="p-4 border-t text-sm text-neutral-600">
          <div className="flex items-center gap-2 flex-wrap">
            {item.images.map((url, index: number) => (
              <div
                className="w-40 h-40 rounded shadow-custom-1 p-1"
                key={index}
              >
                <img src={url} className="w-full h-full object-cover rounded" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilityAccordion;
