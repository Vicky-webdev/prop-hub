// src/components/SearchFilterBar/FilterInput.tsx

import React from "react";

export interface FilterInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
}


const FilterInput: React.FC<FilterInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-gray-700 text-sm">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || ""}
        className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FilterInput;
