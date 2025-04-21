// src/pages/ResultsPage.tsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import propertyData from '../data/mockProperties.json';
import { Property } from '../types/types';
import PropertyCard from '../components/ui/PropertyCard';
import FilterBar from '../components/SearchFilterBar';

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query')?.toLowerCase() || '';
    const locationFilter = params.get('location')?.toLowerCase();
    const typeFilter = params.get('propertyType')?.toLowerCase();
    const bhkFilter = params.get('bhk')?.toLowerCase();
    const minBudget = parseInt(params.get('minBudget') || '0');
    const maxBudget = parseInt(params.get('maxBudget') || '100000000');

    setQuery(queryParam);

    const filtered = (propertyData as Property[]).filter((property) => {
      const matchesQuery = queryParam ? property.title.toLowerCase().includes(queryParam) : true;
      const matchesLocation = locationFilter
        ? property.location.toLowerCase().includes(locationFilter)
        : true;
      const matchesType = typeFilter ? property.propertyType.toLowerCase() === typeFilter : true;
      const matchesBHK = bhkFilter ? property.bhk?.toLowerCase().includes(bhkFilter) : true;
      const matchesBudget = property.budget >= minBudget && property.budget <= maxBudget;

      return matchesQuery && matchesLocation && matchesType && matchesBHK && matchesBudget;
    });

    setFilteredProperties(filtered);
  }, [location.search]);

  useEffect(() => {
    const stored = localStorage.getItem('wishlist');
    const wishlist = stored ? JSON.parse(stored) : [];
    setFavorites(wishlist);
  }, []);

  const toggleWishlist = (id: number) => {
    let updated = [...favorites];
    if (favorites.includes(id)) {
      updated = updated.filter((item) => item !== id);
    } else {
      updated.push(id);
    }
    setFavorites(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const handleSearch = (filters: {
    location: string;
    propertyType: string;
    bhk: string;
    minBudget: string;
    maxBudget: string;
  }) => {
    const searchParams = new URLSearchParams();

    if (filters.location) searchParams.append('location', filters.location);
    if (filters.propertyType) searchParams.append('propertyType', filters.propertyType);
    if (filters.bhk) searchParams.append('bhk', filters.bhk);
    if (filters.minBudget) searchParams.append('minBudget', filters.minBudget);
    if (filters.maxBudget) searchParams.append('maxBudget', filters.maxBudget);

    navigate(`/results?${searchParams.toString()}`);
  };

  const handleSubmitSearch = (title: string) => {
    if (title) {
      navigate(`/results?query=${encodeURIComponent(title)}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FilterBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        onSubmit={handleSubmitSearch}
        suggestions={(propertyData as Property[]).slice(0, 5)}
      />
      <h2 className="text-xl font-semibold mb-4">
        Showing {filteredProperties.length} results
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isFavorite={favorites.includes(property.id)}
            onToggle={() => toggleWishlist(property.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
