// src/components/ui/PropertyCard.tsx
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { Property } from "../../types/types";

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggle: () => void;
}

const badgeColorMap: Record<string, string> = {
  Hot: "bg-red-500",
  "New Launch": "bg-green-600",
  Active: "bg-blue-500",
  "Sold Out": "bg-gray-700",
  "Limited Units": "bg-yellow-400",
};

const PropertyCard = ({ property, isFavorite, onToggle }: PropertyCardProps) => {
  const navigate = useNavigate();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [wasAdded, setWasAdded] = useState(true);
  const [undoTimer, setUndoTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !isFavorite;
    setWasAdded(nextState);
    onToggle();
    setShowSnackbar(true);

    if (undoTimer) clearTimeout(undoTimer);
    const timer = setTimeout(() => setShowSnackbar(false), 4000);
    setUndoTimer(timer);
  };

  const handleUndo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (undoTimer) clearTimeout(undoTimer);
    onToggle(); // revert
    setShowSnackbar(false);
  };

  return (
    <motion.div
      className="relative flex flex-col bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/property/${property.id}`)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      layout
    >
      {/* Badge */}
      {property.badge && (
        <span
          className={`absolute top-2 left-2 px-2 py-1 text-xs text-white font-medium rounded ${
            badgeColorMap[property.badge] || "bg-gray-500"
          }`}
        >
          {property.badge}
        </span>
      )}

      {/* Wishlist Heart Icon */}
      <button
        onClick={handleWishlistClick}
        className="absolute top-2 right-2 text-lg z-10"
      >
        <FaHeart className={isFavorite ? "text-red-500" : "text-gray-400"} />
      </button>

      {/* Property Image */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-36 object-cover rounded-t-xl"
      />

      {/* Property Content */}
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-base font-semibold text-gray-800 dark:text-white">
          {property.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{property.location}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Type: {property.propertyType}
        </p>
        <div className="flex justify-between items-center pt-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {property.bhk}
          </span>
          <span className="text-base font-semibold text-green-700 dark:text-green-400">
            ₹{property.budget.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Snackbar Animation */}
      <AnimatePresence>
        {showSnackbar && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 bg-zinc-800 text-white text-sm px-4 py-3 rounded-b-xl shadow-md flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              {wasAdded ? (
                <IoCheckmarkCircle className="text-green-400 text-xl" />
              ) : (
                <IoCloseCircle className="text-red-400 text-xl" />
              )}
              <span>
                {wasAdded ? "Added to Wishlist" : "Removed from Wishlist"}
              </span>
            </div>
            <button
              onClick={handleUndo}
              className="text-blue-400 hover:underline text-sm"
            >
              Undo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PropertyCard;
