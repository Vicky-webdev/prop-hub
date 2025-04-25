// BHKSelector.tsx
import React from "react";

export interface BHKSelectorProps {
  selectedBHK: string[];
  onChange: (val: string[]) => void;
}

const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"];

const BHKSelector: React.FC<BHKSelectorProps> = ({ selectedBHK, onChange }) => {
  const toggleBHK = (bhk: string) => {
    const newSelection = selectedBHK.includes(bhk)
      ? selectedBHK.filter((b) => b !== bhk)
      : [...selectedBHK, bhk];
    onChange(newSelection);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {bhkOptions.map((bhk) => {
        const selected = selectedBHK.includes(bhk);
        return (
          <button
            key={bhk}
            className={`px-3 py-1 rounded-full border text-sm transition ${
              selected
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
            }`}
            onClick={() => toggleBHK(bhk)}
          >
            {selected ? "✓" : "+"} {bhk}
          </button>
        );
      })}
    </div>
  );
};

export default BHKSelector;
