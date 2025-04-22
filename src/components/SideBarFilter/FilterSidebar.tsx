// src/components/SideBarFilter/FilterSidebar.tsx
import React, { useState } from "react";
import SidebarFilter from "./SidebarFilter";

interface Filters {
  location: string;
  type: string;
  bhk: string;
  minBudget: string;
  maxBudget: string;
}

interface FilterSidebarProps {
  filters: Filters;
  onChange: (newFilters: Filters) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onChange }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button
        onClick={toggleSidebar}
        className="p-2 bg-blue-500 text-white rounded-md fixed top-4 left-4 md:hidden z-10"
      >
        {isSidebarVisible ? "Close Filters" : "Show Filters"}
      </button>

      {/* Overlay when sidebar is visible */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden ${isSidebarVisible ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 z-30 md:block transition-transform duration-300 transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarFilter filters={filters} onChange={onChange} />
      </div>
    </div>
  );
};

export default FilterSidebar;
