import React from "react";
import SidebarFilter from "./SidebarFilter";
import { Filters } from "../../types/types";

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (updatedFilters: Filters) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="w-full sm:w-72 p-4 bg-white rounded-xl shadow-md border">
      <SidebarFilter filters={filters} onChange={onFilterChange} />
    </div>
  );
};

export default FilterSidebar;
