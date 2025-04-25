import { useEffect, useState } from "react";
import mockProperties from "@/data/mockProperties.json";
import PropertyCard from "@/components/ui/PropertyCard";
import { SidebarFilter } from "@/components/filters/SidebarFilter";
import { Filters } from "@/types/types";

// ✅ Ensure Filters type includes: bhk, propertyType, budget, area, location

const ResultsPageWithSidebar = () => {
  const [filters, setFilters] = useState<Filters>({
    bhk: [],
    propertyType: [],
    budget: { min: 0, max: Infinity },
    area: { min: 0, max: Infinity },
    location: "",
  });

  const [filtered, setFiltered] = useState(mockProperties);

  useEffect(() => {
    const results = mockProperties.filter((property) => {
      const matchesBHK =
        filters.bhk.length === 0 || filters.bhk.includes(property.bhk);

      const matchesType =
        filters.propertyType.length === 0 ||
        filters.propertyType.includes(property.propertyType);

      const matchesBudget =
        Number(property.budget) >= filters.budget.min &&
        Number(property.budget) <= filters.budget.max;

      const matchesArea =
        Number(property.area) >= filters.area.min &&
        Number(property.area) <= filters.area.max;

      const matchesLocation =
        filters.location === "" ||
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());

      return (
        matchesBHK &&
        matchesType &&
        matchesBudget &&
        matchesArea &&
        matchesLocation
      );
    });

    setFiltered(results);
  }, [filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 p-4">
      <SidebarFilter filters={filters} setFilters={setFilters} />
      <div className="grid gap-4">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPageWithSidebar;
