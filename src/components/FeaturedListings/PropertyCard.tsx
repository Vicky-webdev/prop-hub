import { FaHeart } from "react-icons/fa";

type Listing = {
  id: number;
  title: string;
  image: string;
  location: string;
  propertyType: string;
  bhk: string;
  budget: number;
  badge?: keyof typeof badgeColorMap;
};

const badgeColorMap = {
  Hot: "bg-red-500",
  "New Launch": "bg-green-500",
  Active: "bg-blue-500",
  "Sold Out": "bg-gray-800",
  "Limited Units": "bg-yellow-500",
};

type Props = {
  listing: Listing;
  isFavorite: boolean;
  onToggle: () => void;
};

export const PropertyCard: React.FC<Props> = ({ listing, isFavorite, onToggle }) => {
  const badgeColor = listing.badge && badgeColorMap[listing.badge] || "bg-gray-500";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-3 relative">
      {listing.badge && (
        <span className={`absolute top-2 left-2 text-xs text-white px-2 py-1 rounded ${badgeColor}`}>
          {listing.badge}
        </span>
      )}
      <button onClick={onToggle} className="absolute top-2 right-2 text-lg z-10">
        <FaHeart className={isFavorite ? "text-red-500" : "text-gray-400"} />
      </button>
      <img src={listing.image} alt={listing.title} className="w-full h-32 object-cover rounded-lg" />
      <div className="mt-2 space-y-1 text-sm">
        <h3 className="font-semibold text-gray-800">{listing.title}</h3>
        <p className="text-gray-500">{listing.location}</p>
        <p className="text-gray-600">{listing.propertyType} | {listing.bhk}</p>
        <div className="text-green-600 font-semibold text-sm mt-1">₹{(listing.budget / 100000).toFixed(2)}L</div>
      </div>
    </div>
  );
};
