import React, { useState } from "react";

interface Props {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const dummyLocations = [
  "Avadi", "Tambaram", "Kovilambakkam", "Guduvanchery", "Sholinganallur", "Pallikaranai"
];

const FilterInput: React.FC<Props> = ({ label, value, placeholder, onChange }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (val: string) => {
    onChange(val);
    if (val.length > 1) {
      const filtered = dummyLocations.filter(loc =>
        loc.toLowerCase().includes(val.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <label className="text-sm font-medium block mb-1">{label}</label>
      <input
        type="text"
        className="w-full border rounded-md px-3 py-2"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded w-full mt-1 max-h-40 overflow-auto shadow">
          {suggestions.map((item) => (
            <li
              key={item}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(item);
                setSuggestions([]);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterInput;
