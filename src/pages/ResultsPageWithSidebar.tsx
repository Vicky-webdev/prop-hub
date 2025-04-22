import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilterSidebar from "../components/SideBarFilter/FilterSidebar";
import propertyData from "../data/mockProperties.json";
import { Property } from "../types/types";
import { ArrowLeft } from "lucide-react";
import Button from "../components/ui/Button";
import FilterInput from "../components/SearchFilterBar/FilterInput";
import BHKSelector from "../components/SearchFilterBar/BHKSelector";
import BudgetRange from "../components/SearchFilterBar/BudgetRange";

const ResultsPageWithSidebar: React.FC = () => {
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
    const updatedFilters = {
      location: locationParam,
      type: typeParam,
      bhk: bhkParam,
      minBudget: minBudgetParam.toString(),
      maxBudget: maxBudgetParam.toString(),
    };
    setFilters(updatedFilters);

    const filtered = (propertyData as Property[]).filter((property) => {
      const matchesQuery = queryParam
        ? property.title.toLowerCase().includes(queryParam)
        : true;
      const matchesLocation = updatedFilters.location
        ? property.location.toLowerCase().includes(updatedFilters.location)
        : true;
      const matchesType = updatedFilters.type
        ? property.propertyType.toLowerCase() === updatedFilters.type
        : true;
      const matchesBHK = updatedFilters.bhk
        ? property.bhk?.toLowerCase().includes(updatedFilters.bhk) || property.bhk === "NA"
        : true;
      const matchesMinBudget = property.budget >= parseInt(updatedFilters.minBudget);
      const matchesMaxBudget = property.budget <= parseInt(updatedFilters.maxBudget);

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
  }, [location.search, queryParam]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for Filters */}
      <div className="w-64 bg-white shadow-md p-6 sticky top-16 z-40">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <FilterInput
          value={filters.location}
          onChange={(value) => handleFilterChange({ ...filters, location: value })}
          suggestions={["Chennai", "Bangalore", "Delhi", "Mumbai"]}
        />
        <BHKSelector value={filters.bhk} onChange={(value) => handleFilterChange({ ...filters, bhk: value })} />
        <BudgetRange
          minValue={parseInt(filters.minBudget)}
          maxValue={parseInt(filters.maxBudget)}
          onChange={(minValue, maxValue) => handleFilterChange({ ...filters, minBudget: minValue.toString(), maxBudget: maxValue.toString() })}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div key={property.id} className="bg-white p-4 rounded-lg shadow-md cursor-pointer" onClick={() => navigate(`/property/${property.id}`)}>
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="font-semibold text-lg mt-2">{property.title}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
                <p className="text-sm text-gray-600">{property.propertyType}</p>
                <p className="text-blue-600 font-semibold">₹{property.budget.toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p className="text-red-500 mt-6">No properties found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPageWithSidebar;
