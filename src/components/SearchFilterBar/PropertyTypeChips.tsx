import React from "react";

interface PropertyTypeChipsProps {
  selectedTypes: string[];
  onChange: (types: string[]) => void;
}

const propertyTypes = [
  "Apartment",
  "Villa",
  "Land / Plot",
  "Independent House",
  "Farm House",
];

const PropertyTypeChips: React.FC<PropertyTypeChipsProps> = ({ selectedTypes, onChange }) => {
  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      onChange(selectedTypes.filter((t) => t !== type));
    } else {
      onChange([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {propertyTypes.map((type) => {
        const isSelected = selectedTypes.includes(type);
        return (
          <button
            key={type}
            onClick={() => toggleType(type)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              isSelected
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {isSelected ? "✓ " : "+ "} {type}
          </button>
        );
      })}
    </div>
  );
};

export default PropertyTypeChips;
