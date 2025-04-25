// src/components/filters/BHKSelector.tsx
import React from "react";

const BHK_OPTIONS = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"];

type BHKSelectorProps = {
  selected: string[];
  onChange: (selected: string[]) => void;
};

const BHKSelector: React.FC<BHKSelectorProps> = ({ selected, onChange }) => {
  const toggleBHK = (bhk: string) => {
    if (selected.includes(bhk)) {
      onChange(selected.filter(b => b !== bhk));
    } else {
      onChange([...selected, bhk]);
    }
  };

  return (
    <div className="mt-4">
      <label className="block mb-2 font-medium text-gray-700">BHK</label>
      <div className="flex flex-wrap gap-2">
        {BHK_OPTIONS.map(bhk => (
          <button
            key={bhk}
            onClick={() => toggleBHK(bhk)}
            className={`px-4 py-1 rounded-full border transition 
              ${selected.includes(bhk) ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}
            `}
          >
            {bhk}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BHKSelector;
