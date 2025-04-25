// src/components/filters/SidebarFilter.tsx
import { useEffect, useState } from "react";
import { FilterChipGroup } from "./FilterChipGroup";
import BudgetRange from "./BudgetRange";
import AreaRange from "./AreaRange";
import { FilterBadge } from "./FilterBadge";
// import { cn } from "@/lib/utils";

export type Filters = {
  bhk: string[];
  propertyType: string[];
  budget: {
    min: number;
    max: number;
  };
  area: {
    min: number;
    max: number;
  };
};

const initialFilters: Filters = {
  bhk: [],
  propertyType: [],
  budget: { min: 0, max: 5e7 },
  area: { min: 0, max: 10000 },
};

const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK"];
const propertyTypeOptions = ["Land / Plot", "Villa", "Flat", "Independent House"];

type SidebarFilterProps = {
  onFilterChange: (filters: Filters) => void;
};

export const SidebarFilter = ({ onFilterChange }: SidebarFilterProps) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  const handleClearAll = () => setFilters(initialFilters);

  const handleClearSingle = (type: keyof Filters, value: string) => {
    if (type === "bhk" || type === "propertyType") {
      setFilters(prev => ({
        ...prev,
        [type]: prev[type].filter(v => v !== value),
      }));
    }
  };

  return (
    <div className="p-4 w-72 bg-white shadow-lg rounded-xl sticky top-4 space-y-6">
      <h2 className="text-lg font-semibold mb-2">Filters</h2>

      <FilterChipGroup
        label="BHK Type"
        options={bhkOptions}
        selected={filters.bhk}
        onChange={(bhk) => setFilters({ ...filters, bhk })}
      />

      <FilterChipGroup
        label="Property Type"
        options={propertyTypeOptions}
        selected={filters.propertyType}
        onChange={(propertyType) => setFilters({ ...filters, propertyType })}
      />

      <BudgetRange
        label="Budget"
        min={0}
        max={50000000}
        value={filters.budget}
        onChange={(budget) => setFilters({ ...filters, budget })}
      />

      <AreaRange
        label="Area (sqft)"
        min={0}
        max={10000}
        value={filters.area}
        onChange={(area) => setFilters({ ...filters, area })}
      />

      {(filters.bhk.length || filters.propertyType.length) > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Selected:</h4>
          <div className="flex flex-wrap gap-2">
            {filters.bhk.map((val) => (
              <FilterBadge
                key={val}
                label={val}
                onClear={() => handleClearSingle("bhk", val)}
              />
            ))}
            {filters.propertyType.map((val) => (
              <FilterBadge
                key={val}
                label={val}
                onClear={() => handleClearSingle("propertyType", val)}
              />
            ))}
          </div>
          <button
            onClick={handleClearAll}
            className="text-sm text-blue-600 hover:underline mt-2"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};
