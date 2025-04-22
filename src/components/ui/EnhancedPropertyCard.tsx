import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // Wishlist Icon

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    propertyType: string;
    budget: number;
    image: string;
    bhk: string;
  };
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

const EnhancedPropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isWishlisted,
  onToggleWishlist,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      {/* Property Image */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />

      {/* Property Details */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{property.title}</h3>
          <button
            className={`text-lg ${isWishlisted ? "text-red-500" : "text-gray-400"}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist();
            }}
          >
            <FaHeart />
          </button>
        </div>
        <p className="text-sm text-gray-600">{property.location}</p>
        <p className="text-sm text-gray-600">{property.propertyType}</p>
        <p className="text-blue-600 font-semibold">₹{property.budget.toLocaleString()}</p>
        <p className="text-xs text-gray-500 mt-2">BHK: {property.bhk}</p>
      </div>
    </div>
  );
};

export default EnhancedPropertyCard;
