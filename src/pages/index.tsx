import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

import HeroSection from '../components/ui/HeroSection';
// import SearchBar from '../components/SearchFilterBar';
import FeaturesSection from '../components/home/FeaturesSection';
import FeaturedListings from '../components/home/FeaturedListings';
import PropertySlider from '../components/home/PropertySlider';

import bannerImage from '../assets/images/1.jpg';
import propertyData from '../data/mockProperties.json';
import { Property } from '../types/types';


 

const HomePage = () => {
  const [filtered, setFiltered] = useState<Property[]>([]);
  // const [properties, setProperties] = useState<Property[]>([]);
  // const [query, setQuery] = useState<string>('');
  // const navigate = useNavigate();

  useEffect(() => {
    const loadedProperties = propertyData as Property[];
    setFiltered(loadedProperties);
    // setProperties(loadedProperties);
  }, []);

  

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
