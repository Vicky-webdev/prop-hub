import  { useEffect, useState } from "react";
import Slider from "react-slick";
import { sliderSettings } from "./sliderConfig";
import { PropertyCard } from "./PropertyCard";

export const ListingSlider = ({ listings }: { listings: any[] }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const toggleFavorite = (id: number) => {
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <Slider {...sliderSettings}>
      {listings.map((listing) => (
        <div key={listing.id} className="px-2">
          <PropertyCard
            listing={listing}
            isFavorite={favorites.includes(listing.id)}
            onToggle={() => toggleFavorite(listing.id)}
          />
        </div>
      ))}
    </Slider>
  );
};
