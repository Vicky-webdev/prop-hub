import React from "react";

interface FilterDropdownProps {
  selectedType: string;
  onTypeChange: (value: string) => void;
  label?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ selectedType, onTypeChange, label = "Property Type" }) => {
  const propertyTypes = ["", "Apartment", "Villa", "Land / Plot", "Independent House"];

  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {propertyTypes.map((type, index) => (
          <option key={index} value={type}>
            {type || "Select Property Type"}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
