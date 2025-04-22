// src/pages/ResultsPage.tsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import propertyData from "../data/mockProperties.json";
import { Property } from "../types/types";
import PropertyCard from "../components/ui/PropertyCard"; // Import PropertyCard

const ResultsPage: React.FC = () => {
  const location = useLocation();
  // const navigate = useNavigate();
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
    min: minBudgetParam,
    max: maxBudgetParam,
  });

  const [favorites, setFavorites] = useState<number[]>([]); // Keep track of favorite properties

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value.toLowerCase() }));
  };

  const filteredProperties = propertyData.filter((property: Property) => {
    const matchesQuery = queryParam ? property.title.toLowerCase().includes(queryParam) : true;
    const matchesLocation = filters.location ? property.location.toLowerCase().includes(filters.location) : true;
    const matchesType = filters.type ? property.propertyType.toLowerCase() === filters.type : true;
    const matchesBHK = filters.bhk ? property.bhk?.toLowerCase().includes(filters.bhk) : true;
    const matchesMin = filters.min ? property.budget >= filters.min : true;
    const matchesMax = filters.max ? property.budget <= filters.max : true;

    return matchesQuery && matchesLocation && matchesType && matchesBHK && matchesMin && matchesMax;
  });

  const toggleWishlist = (id: number) => {
    let updated = [...favorites];
    if (favorites.includes(id)) {
      updated = updated.filter((item) => item !== id);
    } else {
      updated.push(id);
    }
    setFavorites(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div  className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">Search Results</h2>

      {/* 🔍 Filter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6 bg-gray-50 p-4 rounded-lg shadow-sm">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Property Type</option>
          <option value="villa">Villa</option>
          <option value="land / plot">Land / Plot</option>
        </select>
        <input
          type="text"
          name="bhk"
          placeholder="BHK (e.g., 3)"
          value={filters.bhk}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="min"
          placeholder="Min Budget"
          value={filters.min}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="max"
          placeholder="Max Budget"
          value={filters.max}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property: Property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onToggle={() => toggleWishlist(property.id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-red-500 mt-6">No properties found matching your criteria.</p>
      )}
    </div> 
  );
};

export default ResultsPage;
