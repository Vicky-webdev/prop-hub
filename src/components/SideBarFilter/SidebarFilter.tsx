import React from "react";

interface Filters {
  location: string;
  type: string;
  bhk: string;
  minBudget: string;
  maxBudget: string;
}

interface SidebarFilterProps {
  filters: Filters;
  onChange: (newFilters: Filters) => void;
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({ filters, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({
      ...filters,
      [name]: value, 
    });
  };

  return (
    <div className="bg-white dark:bg-zinc-900 shadow-lg p-4 rounded-lg">
      <h3 className="font-semibold text-lg">Filters</h3>

      {/* Location Filter */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          placeholder="Enter location"
        />
      </div>

      {/* Property Type Filter */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Property Type</label>
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
        >
          <option value="">Select Type</option>
          <option value="villa">Villa</option>
          <option value="land / plot">Land / Plot</option>
          <option value="apartment">Apartment</option>
        </select>
      </div>

      {/* BHK Filter */}
      <div className="mt-4">
        <label className="block text-sm font-medium">BHK</label>
        <input
          type="text"
          name="bhk"
          value={filters.bhk}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          placeholder="e.g., 2, 3"
        />
      </div>

      {/* Min Budget Filter */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Min Budget</label>
        <input
          type="number"
          name="minBudget"
          value={filters.minBudget}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          placeholder="Enter min budget"
        />
      </div>

      {/* Max Budget Filter */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Max Budget</label>
        <input
          type="number"
          name="maxBudget"
          value={filters.maxBudget}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          placeholder="Enter max budget"
        />
      </div>
    </div>
  );
};

export default SidebarFilter;
