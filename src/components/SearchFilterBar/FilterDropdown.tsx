import React from "react";

interface Props {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const FilterDropdown: React.FC<Props> = ({ label, value, options, onChange }) => {
  return (
    <div>
      <label className="text-sm font-medium block mb-1">{label}</label>
      <select
        className="w-full border rounded-md px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
