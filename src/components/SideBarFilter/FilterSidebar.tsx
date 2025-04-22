// components/FilterSidebar.tsx
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineVilla } from "react-icons/md";
import { PiBedBold } from "react-icons/pi";
import { LuIndianRupee } from "react-icons/lu";

interface Props {
  filters: any;
  onChange: (filters: any) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

const FilterSidebar: React.FC<Props> = ({
  filters,
  onChange,
  isMobileOpen,
  onCloseMobile,
}) => {
  const sidebarContent = (
    <div className="space-y-4">
      <div className="relative">
        <SlLocationPin className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={(e) => onChange({ ...filters, location: e.target.value })}
          className="w-full p-2 pl-10 border rounded"
        />
      </div>
      <div className="relative">
        <MdOutlineVilla className="absolute left-3 top-3 text-gray-400" />
        <select
          name="type"
          value={filters.type}
          onChange={(e) => onChange({ ...filters, type: e.target.value })}
          className="w-full p-2 pl-10 border rounded"
        >
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="land / plot">Land / Plot</option>
        </select>
      </div>
      <div className="relative">
        <PiBedBold className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          name="bhk"
          placeholder="BHK"
          value={filters.bhk}
          onChange={(e) => onChange({ ...filters, bhk: e.target.value })}
          className="w-full p-2 pl-10 border rounded"
        />
      </div>
      <div className="flex space-x-2">
        <div className="relative w-1/2">
          <LuIndianRupee className="absolute left-3 top-3 text-gray-400" />
          <input
            type="number"
            name="minBudget"
            placeholder="Min Budget"
            value={filters.minBudget}
            onChange={(e) =>
              onChange({ ...filters, minBudget: e.target.value })
            }
            className="w-full p-2 pl-10 border rounded"
          />
        </div>
        <div className="relative w-1/2">
          <LuIndianRupee className="absolute left-3 top-3 text-gray-400" />
          <input
            type="number"
            name="maxBudget"
            placeholder="Max Budget"
            value={filters.maxBudget}
            onChange={(e) =>
              onChange({ ...filters, maxBudget: e.target.value })
            }
            className="w-full p-2 pl-10 border rounded"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block lg:w-1/4 sticky top-20 bg-white shadow-md p-6 z-40">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <div className="fixed left-0 top-0 bottom-0 w-4/5 bg-white p-6 shadow-lg animate-slideIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={onCloseMobile}
                className="text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
