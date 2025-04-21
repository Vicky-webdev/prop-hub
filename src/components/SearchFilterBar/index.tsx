import { useState, useEffect, useRef } from 'react';
import { MapPin, Search } from 'lucide-react';
import * as Slider from '@radix-ui/react-slider';
import type { Property } from '../../types/types';

const formatBudget = (value: number) => {
  if (value >= 100) return `₹${(value / 100).toFixed(1)}Cr`;
  return `₹${value}L`;
};

interface SearchBarProps {
  query: string;
  onSearch: (filters: {
    location: string;
    propertyType: string;
    bhk: string;
    minBudget: string;
    maxBudget: string;
  }) => void;
  onSubmit: (title: string) => void;
  suggestions: Property[];
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSubmit, onSearch, suggestions }) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bhk, setBhk] = useState('');
  const [budgetRange, setBudgetRange] = useState<[number, number]>([0, 100]);
  const [inputQuery, setInputQuery] = useState(query || '');

  const [locationSuggestions, setLocationSuggestions] = useState<Property[]>([]);
  const [titleSuggestions, setTitleSuggestions] = useState<Property[]>([]);

  const locationRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputQuery(query);
  }, [query]);

  useEffect(() => {
    if (location.trim() === '') {
      setLocationSuggestions([]);
    } else {
      const filtered = suggestions.filter((s) =>
        s.location.toLowerCase().includes(location.toLowerCase())
      );
      setLocationSuggestions(filtered);
    }
  }, [location, suggestions]);

  useEffect(() => {
    if (inputQuery.trim() === '') {
      setTitleSuggestions([]);
    } else {
      const filtered = suggestions.filter((s) =>
        s.title.toLowerCase().includes(inputQuery.toLowerCase())
      );
      setTitleSuggestions(filtered);
    }
  }, [inputQuery, suggestions]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setLocationSuggestions([]);
      }
      if (titleRef.current && !titleRef.current.contains(e.target as Node)) {
        setTitleSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterSearch = () => {
    onSearch({
      location,
      propertyType,
      bhk,
      minBudget: String(budgetRange[0] * 100000),
      maxBudget: String(budgetRange[1] * 100000),
    });
  };

  const handleLocationSelect = (loc: string) => {
    setLocation(loc);
    setLocationSuggestions([]);
    onSearch({
      location: loc,
      propertyType,
      bhk,
      minBudget: String(budgetRange[0] * 100000),
      maxBudget: String(budgetRange[1] * 100000),
    });
  };

  return (
    <div className="sticky top-4 z-20 bg-white/90 backdrop-blur shadow-md rounded-xl p-4 border">
      <div className="flex flex-wrap gap-3 items-center justify-between">
        {/* Location */}
        <div className="relative w-full sm:w-1/4" ref={locationRef}>
          <MapPin className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-2 py-2 border border-gray-300 rounded-md"
          />
          {locationSuggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border mt-1 rounded shadow w-full max-h-48 overflow-y-auto">
              {[...new Set(locationSuggestions.map((s) => s.location))].map((loc, index) => (
                <li
                  key={index}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLocationSelect(loc)}
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Property Type */}
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full sm:w-1/6 border rounded-md px-3 py-2"
        >
          <option value="">Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
        </select>

        {/* BHK */}
        <select
          value={bhk}
          onChange={(e) => setBhk(e.target.value)}
          className="w-full sm:w-1/6 border rounded-md px-3 py-2"
        >
          <option value="">BHK</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
          <option value="4+ BHK">4+ BHK</option>
        </select>

        {/* Budget */}
        <div className="w-full sm:w-1/3">
          <label className="block text-sm font-medium mb-1">Budget Range</label>
          <Slider.Root
            className="relative flex items-center select-none touch-none h-2 bg-gray-200 rounded-md mt-2"
            value={budgetRange}
            onValueChange={(value) => setBudgetRange(value as [number, number])}
            min={0}
            max={500}
            step={5}
          >
            <Slider.Track className="bg-gray-300 relative grow rounded-md h-2">
              <Slider.Range className="absolute bg-indigo-500 rounded-md h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-4 h-4 bg-indigo-600 rounded-full shadow-md cursor-pointer" />
            <Slider.Thumb className="block w-4 h-4 bg-indigo-600 rounded-full shadow-md cursor-pointer" />
          </Slider.Root>
          <div className="flex justify-between text-sm mt-1 text-gray-700">
            <span>{formatBudget(budgetRange[0])}</span>
            <span>{formatBudget(budgetRange[1])}</span>
          </div>
        </div>

        {/* Title Input */}
        <div className="relative w-full sm:w-1/4" ref={titleRef}>
          <input
            type="text"
            placeholder="Search by title..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
          {titleSuggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border mt-1 rounded shadow w-full max-h-48 overflow-y-auto">
              {titleSuggestions.map((s) => (
                <li
                  key={s.id}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setInputQuery(s.title);
                    onSubmit(s.title);
                    setTitleSuggestions([]);
                  }}
                >
                  {s.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={handleFilterSearch}
          className="bg-indigo-600 text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-indigo-700 transition w-full sm:w-auto"
        >
          <Search size={18} />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
