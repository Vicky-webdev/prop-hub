// src/components/filters/FilterChipGroup.tsx
// import React from "react";
import { Plus, Check } from "lucide-react";

type Props = {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
};

export const FilterChipGroup = ({ label, options, selected, onChange }: Props) => {
  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="font-medium text-sm">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = selected.includes(option);
          return (
            <button
              key={option}
              onClick={() => toggle(option)}
              className={`flex items-center gap-1 border rounded-full px-3 py-1 text-sm ${
                isActive
                  ? "bg-blue-100 text-blue-700 border-blue-500"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              {isActive ? <Check size={14} /> : <Plus size={14} />}
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};
