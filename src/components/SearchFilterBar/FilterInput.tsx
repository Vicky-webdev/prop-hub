import React, { useState, useEffect } from "react";

interface FilterInputProps {
  value: string;
  onChange: (value: string) => void;
  suggestions: string[];
}

const FilterInput: React.FC<FilterInputProps> = ({ value, onChange, suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  
  useEffect(() => {
    if (value) {
      setFilteredSuggestions(
        suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  }, [value, suggestions]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by Location"
        className="w-full p-2 border rounded-md"
      />
      {filteredSuggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border mt-2 max-h-48 overflow-y-auto shadow-md rounded-md z-10">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => onChange(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterInput;
