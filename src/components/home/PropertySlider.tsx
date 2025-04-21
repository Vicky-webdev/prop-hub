// components/home/PropertySlider.tsx
import Slider from "react-slick";
import PropertyCard from "../ui/PropertyCard";
import { Property } from "../../types/types";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect,useState } from "react";
import ShimmerCard from "../ui/PropertyCardSkeleton"; // import your shimmer
import { AnimatePresence } from "framer-motion";
// Define a proper type for arrow props
interface ArrowProps {
    onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps ) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 z-10 p-2 bg-white shadow rounded-full hover:scale-110 transition -translate-y-1/2"
  >
    <FaChevronRight className="text-blue-600" />
  </div>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 z-10 p-2 bg-white shadow rounded-full hover:scale-110 transition -translate-y-1/2"
  >
    <FaChevronLeft className="text-blue-600" />
  </div>
);

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const PropertySlider = ({ listings }: { listings: Property[] }) => {
    const [favorites, setFavorites] = useState<number[]>(
        JSON.parse(localStorage.getItem("wishlist") || "[]")
      );
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000); // simulate 1s load
        return () => clearTimeout(timer);
      }, []);
    
      
 const toggleFavorite = (id: number) => {
  const updated = favorites.includes(id)
    ? favorites.filter((favId) => favId !== id)
    : [...favorites, id];
  
  setFavorites(updated);
  localStorage.setItem("wishlist", JSON.stringify(updated));
};


  return (
    <div className="relative">
       {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <ShimmerCard key={i} />
            ))}
        </div>
      ) : (
      <Slider {...sliderSettings}>
        {listings.map((property) => (
          <div key={property.id} className="p-2">
        
          <AnimatePresence>

            <PropertyCard
              property={property}
              isFavorite={favorites.includes(property.id)}
              onToggle={() => toggleFavorite(property.id)}
            />
        </AnimatePresence >
          </div>
        ))}
      </Slider>
      )}

    </div>
  );
};

export default PropertySlider;
