import React from 'react';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  propertyType: string;
  bhk: string;
  budget: number;
  area: number;
  image?: string;
  badge?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  propertyType,
  bhk,
  budget,
  area,
  image,
  badge,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div className="relative">
        <img
          src={image || 'https://via.placeholder.com/300x200'}
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl"
          loading="lazy"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
          <div>
            <span className="font-medium">{bhk}</span>
            <span className="ml-1">| {propertyType}</span>
          </div>
          <span>{area} sqft</span>
        </div>
        <div className="text-indigo-600 font-bold text-base mt-1">₹{budget.toLocaleString()}</div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
