import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import propertyData from "../data/mockProperties.json";
import { Property } from "../types/types";
import FilterSidebar from "../components/SideBarFilter/FilterSidebar";

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
    const newParams = new URLSearchParams(location.search);
  
    const updatedFilters = {
      location: newParams.get("location")?.toLowerCase() || "",
      type: newParams.get("propertyType")?.toLowerCase() || "",
      bhk: newParams.get("bhk")?.toLowerCase() || "",
      minBudget: newParams.get("minBudget") || "0",
      maxBudget: newParams.get("maxBudget") || "100000000",
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
  
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar visible only on large screens */}
    {/* Sidebar for desktop */}
  <aside className="hidden lg:block w-64 bg-gray-100 h-screen sticky top-16 shadow p-4">
    <FilterSidebar filters={filters} onChange={handleFilterChange} />
  </aside>
       {/* Filter toggle button on mobile */}
  <button
    onClick={() => setShowMobileFilter(true)}
    className="lg:hidden fixed top-20 left-4 z-50 bg-white border shadow px-4 py-2 rounded"
  >
    Filters
  </button>

  {/* Mobile Sidebar Overlay */}
  {showMobileFilter && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-start">
      <div className="bg-white w-64 h-full p-4 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={() => setShowMobileFilter(false)}
            className="text-gray-600 hover:text-black"
          >
            ✕
          </button>
        </div>
        <FilterSidebar filters={filters} onChange={handleFilterChange} />
      </div>
    </div>
  )}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div key={property.id} className="bg-white p-4 rounded-lg shadow">
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

export default ResultsPage;
