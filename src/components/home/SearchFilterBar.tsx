import React, { useState } from 'react';

const SearchFilterBar: React.FC<{ onSearch: (filters: any) => void }> = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ search, type, location });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl -mt-16 mx-auto max-w-6xl p-4 md:p-6 relative z-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search by Project Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border rounded-md w-full"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-3 border rounded-md w-full"
        >
          <option value="">Property Type</option>
          <option value="plot">Plot</option>
          <option value="villa">Villa</option>
          <option value="apartment">Apartment</option>
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-3 border rounded-md w-full"
        >
          <option value="">Location</option>
          <option value="chennai">Chennai</option>
          <option value="avadi">Avadi</option>
          <option value="tambaram">Tambaram</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-3 font-semibold transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFilterBar;
