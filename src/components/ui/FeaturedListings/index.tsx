// src/components/FeaturedListings/index.tsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FeaturedListingsProps } from "./types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Hot":
      return "bg-red-500";
    case "New Launch":
      return "bg-green-500";
    case "Active":
      return "bg-blue-500";
    case "Sold Out":
      return "bg-gray-500";
    case "Limited Units":
      return "bg-yellow-500";
    default:
      return "bg-gray-300";
  }
};

const FeaturedListings: React.FC<FeaturedListingsProps> = ({
  listings,
  title = "Featured Listings",
  subtitle = "Top properties hand-picked for you",
  autoplay = true,
  slidesToShow = 4,
  showWishlist = true,
  showBadges = true,
}) => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist") || "[]";
    setWishlist(JSON.parse(stored));
  }, []);

  const toggleWishlist = (id: string) => {
    let updated: string[] = [];
    if (wishlist.includes(id)) {
      updated = wishlist.filter((item) => item !== id);
    } else {
      updated = [...wishlist, id];
      toast.success("Added to Wishlist", { position: "top-center" });
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: autoplay,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      <Slider {...settings}>
        {listings.map((listing) => (
          <div key={listing.id} className="p-2">
            <div className="bg-white shadow rounded-2xl overflow-hidden relative h-full flex flex-col">
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-56 w-full object-cover"
                />
                {showBadges && listing.badge && (
                  <span
                    className={`absolute top-2 left-2 text-white px-2 py-1 text-xs rounded ${getBadgeColor(
                      listing.badge
                    )}`}
                  >
                    {listing.badge}
                  </span>
                )}
                {showWishlist && (
                  <span
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => toggleWishlist(listing.id)}
                  >
                    {wishlist.includes(listing.id) ? (
                      <FaHeart className="text-red-500 text-xl" />
                    ) : (
                      <FaRegHeart className="text-white text-xl" />
                    )}
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1">{listing.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{listing.by}</p>
                <p className="text-sm text-gray-500 mb-1">{listing.location}</p>
                <p className="text-sm text-gray-500 mb-1">{listing.type}</p>
                <p className="text-blue-500 font-semibold mt-auto">{listing.priceRange}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedListings;
