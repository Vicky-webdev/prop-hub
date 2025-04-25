// src/components/filters/LocationFilter.tsx
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Property } from "@/types/types";
import { FilterBadge } from "../filters/FilterBadge";

type LocationFilterProps = {
  selectedLocations: string[];
  onChange: (locations: string[]) => void;
  allProperties: Property[];
};

export default function LocationFilter({
  selectedLocations,
  onChange,
  allProperties,
}: LocationFilterProps) {
  const [locations, setLocations] = useState<string[]>([]);

  useEffect(() => {
    const uniqueLocations = Array.from(
      new Set(allProperties.map((p) => p.location))
    );
    setLocations(uniqueLocations);
  }, [allProperties]);

  const toggleLocation = (loc: string) => {
    if (selectedLocations.includes(loc)) {
      onChange(selectedLocations.filter((l) => l !== loc));
    } else {
      onChange([...selectedLocations, loc]);
    }
  };

  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Location</h4>
      <div className="flex flex-wrap gap-2">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => toggleLocation(loc)}
            className={cn(
              "px-3 py-1 text-sm rounded-full border transition",
              selectedLocations.includes(loc)
                ? "bg-blue-100 text-blue-600 border-blue-400"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            )}
          >
            {loc}
          </button>
        ))}
      </div>
      {selectedLocations.length > 0 && (
        <FilterBadge
          label={`Clear (${selectedLocations.length})`}
          onClear={() => onChange([])}
        />
      )}
    </div>
  );
}
