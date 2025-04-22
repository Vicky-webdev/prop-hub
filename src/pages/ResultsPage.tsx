// src/pages/ResultsPage.tsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilterSidebar from "../components/SideBarFilter/FilterSidebar";
import propertyData from "../data/mockProperties.json";
import { Property } from "../types/types";

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const queryParam = params.get("query")?.toLowerCase() || "";
  const locationParam = params.get("location")?.toLowerCase() || "";
  const typeParam = params.get("propertyType")?.toLowerCase() || "";
  const bhkParam = params.get("bhk")?.toLowerCase() || "";
  const minBudgetParam = parseInt(params.get("minBudget") || "0");
  const maxBudgetParam = parseInt(params.get("maxBudget") || "100000000");

  const [filters, setFilters] = useState({
    location: locationParam,
    type: typeParam,
    bhk: bhkParam,
    minBudget: minBudgetParam.toString(),
    maxBudget: maxBudgetParam.toString(),
  });

  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    const searchParams = new URLSearchParams();
    searchParams.set("location", newFilters.location);
    searchParams.set("propertyType", newFilters.type);
    searchParams.set("bhk", newFilters.bhk);
    searchParams.set("minBudget", newFilters.minBudget);
    searchParams.set("maxBudget", newFilters.maxBudget);
    navigate(`/results?${searchParams.toString()}`);
  };

  useEffect(() => {
    const filtered = (propertyData as Property[]).filter((property) => {
      const matchesQuery = queryParam
        ? property.title.toLowerCase().includes(queryParam)
        : true;
      const matchesLocation = filters.location
        ? property.location.toLowerCase().includes(filters.location)
        : true;
      const matchesType = filters.type
        ? property.propertyType.toLowerCase() === filters.type
        : true;
      const matchesBHK = filters.bhk
        ? property.bhk?.toLowerCase().includes(filters.bhk) || property.bhk === "NA"
        : true; // Handle undefined bhk
      const matchesMinBudget = property.budget >= parseInt(filters.minBudget);
      const matchesMaxBudget = property.budget <= parseInt(filters.maxBudget);

      return (
        matchesQuery &&
        matchesLocation &&
        matchesType &&
        matchesBHK &&
        matchesMinBudget &&
        matchesMaxBudget
      );
    });

    setFilteredProperties(filtered);
  }, [filters, queryParam]);

  return (
    <div>
      <FilterSidebar filters={filters} onChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ml-64">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="bg-white p-4 rounded-lg shadow">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p>{property.propertyType}</p>
              <p>₹{property.budget.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-red-500 mt-6">No properties found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
