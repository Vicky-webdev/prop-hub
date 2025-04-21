import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SnackbarUndo from '../../components/ui/SnackbarUndo';
import mockProperties from '../../data/mockProperties.json';
import { Property } from '../../types/types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const getBadgeColor = (badge: string | undefined) => {
  switch (badge) {
    case 'Hot': return 'bg-red-500';
    case 'New Launch': return 'bg-green-500';
    case 'Active': return 'bg-blue-500';
    case 'Sold Out': return 'bg-gray-800';
    case 'Limited Units': return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:scale-110 transition" onClick={onClick}>
    <FaChevronRight className="text-blue-600" />
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:scale-110 transition" onClick={onClick}>
    <FaChevronLeft className="text-blue-600" />
  </div>
);

const FeaturedListings: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [lastToggledId, setLastToggledId] = useState<number | null>(null);

  const navigate = useNavigate();
  const listings: Property[] = mockProperties;

  useEffect(() => {
    const stored = localStorage.getItem('wishlist');
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const toggleFavorite = (id: number) => {
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id];

    setFavorites(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    setLastToggledId(id);
    setToastMessage(favorites.includes(id) ? 'Removed from Wishlist' : 'Added to Wishlist');
    setSnackbarVisible(true);
  };

  const handleUndo = () => {
    if (!lastToggledId) return;
    toggleFavorite(lastToggledId);
    setSnackbarVisible(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <motion.section
      className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">🏡 Featured Listings</h2>
        <p className="text-gray-600 mt-3 text-base">Top properties hand-picked just for you</p>
      </div>

      <div className="relative px-2">
        <Slider {...settings}>
          {listings.map((listing) => (
            <div key={listing.id} className="px-2">
              <div
                onClick={() => navigate(`/property/${listing.id}`)}
                className="cursor-pointer h-full flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative"
              >
                {listing.badge && (
                  <span className={`absolute top-3 left-3 text-white text-xs font-semibold px-2 py-1 rounded ${getBadgeColor(listing.badge)}`}>
                    {listing.badge}
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(listing.id);
                  }}
                  className="absolute top-3 right-3 text-lg z-10 transition"
                >
                  <FaHeart className={favorites.includes(listing.id) ? 'text-red-500' : 'text-gray-400'} />
                </button>

                <img src={listing.image} alt={listing.title} className="w-full h-36 object-cover" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">{listing.title}</h3>
                    <p className="text-sm text-gray-500">{listing.location}</p>
                    <p className="text-sm text-gray-600">{listing.bhk} • {listing.area} sqft</p>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-sm font-medium text-blue-600">{listing.propertyType}</span>
                    <span className="text-base font-semibold text-green-700">₹{(listing.budget / 100000).toFixed(1)}L</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <SnackbarUndo
        visible={snackbarVisible}
        message={toastMessage}
        onUndo={handleUndo}
        onClose={() => setSnackbarVisible(false)}
      />
    </motion.section>
  );
};

export default FeaturedListings;
