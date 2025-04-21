import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HeroSection from '../components/ui/HeroSection';
import SearchBar from '../components/SearchFilterBar';
import FeaturesSection from '../components/home/FeaturesSection';
import FeaturedListings from '../components/home/FeaturedListings';
import PropertySlider from '../components/home/PropertySlider';

import bannerImage from '../assets/images/1.jpg';
import propertyData from '../data/mockProperties.json';

// Define the property type
interface Property {
  id: number;
  title: string;
  location: string;
  propertyType: string;
  bhk: string;
  budget: number;
  area: number;
  image: string;
}

const HomePage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filtered, setFiltered] = useState<Property[]>([]);
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadedProperties = propertyData as Property[];
    setProperties(loadedProperties);
    setFiltered(loadedProperties);
  }, []);

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
    <div className="px-4 sm:px-6 lg:px-8">
      <HeroSection
        backgroundImage={bannerImage}
        title="Find Your Dream Property Today"
        subtitle="Buy, rent, or list your property hassle-free across India"
        showSearchBar
        ctaButtons={[
          { label: 'Search Properties', href: '/buy' },
          { label: 'Post Property FREE', href: '/post', variant: 'secondary' },
        ]}
      />

      <div className="my-6">
        <SearchBar
          query={query}
          onSearch={handleSearch}
          onSubmit={handleSubmitSearch}
          suggestions={filtered.slice(0, 5)}
        />
      </div>

      {/* Listing preview grid */}
      <div className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50 relative mt-6">
          <PropertySlider listings={filtered} />
        </div>


      <FeaturesSection />
      <FeaturedListings />
    </div>
  );
};

export default HomePage;
