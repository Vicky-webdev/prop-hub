// src/components/SidebarFilter.tsx
import React, { useMemo } from "react";
import { Filters } from "../types";
import BHKSelector from "./filters/BHKSelector";
import PropertyTypeSelector from "./filters/PropertyTypeSelector";
import BudgetRange from "./filters/BudgetRange";
import AreaRange from "./filters/AreaRange";
import LocationAutoSuggest from "./filters/LocationAutoSuggest";

type SidebarFilterProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

const SidebarFilter: React.FC<SidebarFilterProps> = ({ filters, setFilters }) => {
  const handleClearAll = () => {
    setFilters({
      propertyTypes: [],
      bhk: [],
      budget: [0, 99999999],
      area: [0, 99999],
      location: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button onClick={handleClearAll} className="text-sm text-blue-600 hover:underline">
          Clear All
        </button>
      </div>

      <PropertyTypeSelector selected={filters.propertyTypes} onChange={(val) => setFilters(f => ({ ...f, propertyTypes: val }))} />

      <BHKSelector selected={filters.bhk} onChange={(val) => setFilters(f => ({ ...f, bhk: val }))} />

      <BudgetRange value={filters.budget} onChange={(val) => setFilters(f => ({ ...f, budget: val }))} />

      <AreaRange value={filters.area} onChange={(val) => setFilters(f => ({ ...f, area: val }))} />

      <LocationAutoSuggest selected={filters.location} onChange={(val) => setFilters(f => ({ ...f, location: val }))} />
    </div>
  );
};

export default SidebarFilter;
