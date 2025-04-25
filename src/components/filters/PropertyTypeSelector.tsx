// src/components/filters/PropertyTypeSelector.tsx
import React from "react";
import { cn } from "@/lib/utils";

const PROPERTY_TYPES = ["Plot", "Villa", "Independent House", "Flat"];

type Props = {
  selected: string[];
  onChange: (types: string[]) => void;
};

const PropertyTypeSelector: React.FC<Props> = ({ selected, onChange }) => {
  const toggleType = (type: string) => {
    if (selected.includes(type)) {
      onChange(selected.filter((t) => t !== type));
    } else {
      onChange([...selected, type]);
    }
  };

  return (
    <div className="mt-4">
      <label className="block mb-2 font-medium text-gray-700">Property Type</label>
      <div className="flex flex-wrap gap-2">
        {PROPERTY_TYPES.map((type) => {
          const isSelected = selected.includes(type);
          return (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={cn(
                "px-4 py-1 rounded-full border text-sm font-medium transition",
                isSelected
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600"
              )}
            >
              {type}
              {isSelected && (
                <span className="ml-1">✕</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyTypeSelector;
