// src/pages/WishlistPage.tsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropertyCard from "../components/ui/PropertyCard";
import SnackbarUndo from "../components/ui/SnackbarUndo";
import mockProperties from "../data/mockProperties.json";
import { Property } from "../types/types";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [removedProperty, setRemovedProperty] = useState<Property | null>(null);

  // Load wishlist and filter properties
  useEffect(() => {
    const stored = localStorage.getItem("wishlist") || "[]";
    const ids: number[] = JSON.parse(stored);
    setWishlist(ids);
    const filtered: Property[] = mockProperties.filter((p) => ids.includes(p.id));
    setProperties(filtered);
  }, []);

  const handleRemove = (id: number) => {
    const removed = properties.find((p) => p.id === id);
    if (!removed) return;

    setRemovedProperty(removed);
    setSnackbarVisible(true);

    const updatedWishlist = wishlist.filter((wid) => wid !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  const handleUndo = () => {
    if (!removedProperty) return;

    const updatedWishlist = [...wishlist, removedProperty.id];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
    setProperties((prev) => [...prev, removedProperty]);
    setRemovedProperty(null);
  };

  const isWishlisted = (id: number) => wishlist.includes(id);

  // Add a fallback for bhk if undefined
  const getBHK = (bhk: string | undefined): string => bhk || "Not specified";

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

      {properties.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-gray-600 text-center mt-10"
        >
          💔 Your wishlist is empty.
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {properties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PropertyCard
                  property={{ ...property, bhk: getBHK(property.bhk ?? "NA") }} // Ensure bhk is a string
                  isFavorite={isWishlisted(property.id)}
                  onToggle={() => handleRemove(property.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <SnackbarUndo
        visible={snackbarVisible}
        message={`${removedProperty?.title} removed from Wishlist`}
        onUndo={handleUndo}
        onClose={() => {
          setSnackbarVisible(false);
          setRemovedProperty(null);
        }}
      />
    </div>
  );
};

export default WishlistPage;
