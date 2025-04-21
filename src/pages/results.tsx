import { useLocation } from 'react-router-dom';
import propertyData from '../data/mockProperties.json';

const ResultsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const query = params.get('query')?.toLowerCase() || '';
  const locationQuery = params.get('location')?.toLowerCase() || '';
  const typeQuery = params.get('propertyType')?.toLowerCase() || '';
  const bhkQuery = params.get('bhk')?.toLowerCase() || '';
  const minBudget = parseInt(params.get('minBudget') || '0');
  const maxBudget = parseInt(params.get('maxBudget') || '100000000');

  const filteredProperties = propertyData.filter((property) => {
    const matchesQuery = query ? property.title.toLowerCase().includes(query) : true;
    const matchesLocation = locationQuery ? property.location.toLowerCase().includes(locationQuery) : true;
    const matchesType = typeQuery ? property.propertyType.toLowerCase() === typeQuery : true;
    const matchesBHK = bhkQuery ? property.bhk.toLowerCase() === bhkQuery : true;
    const matchesMin = minBudget ? property.budget >= minBudget : true;
    const matchesMax = maxBudget ? property.budget <= maxBudget : true;

    return matchesQuery && matchesLocation && matchesType && matchesBHK && matchesMin && matchesMax;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-sm">{property.propertyType} | {property.bhk}</p>
              <p className="text-blue-600 font-bold mt-2">₹{property.budget.toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-600">No properties found matching your criteria.</p>
      )}
    </div>
  );
};

export default ResultsPage;
