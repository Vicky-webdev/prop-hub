// 📄 src/components/shimmer/FeaturedListingShimmer.tsx
import React from "react";

const FeaturedListingShimmer = () => (
  <div className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden p-3">
    <div className="h-36 bg-gray-300 rounded w-full mb-4" />
    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-1" />
    <div className="h-4 bg-gray-200 rounded w-2/3 mb-3" />
    <div className="flex justify-between">
      <div className="h-4 w-1/4 bg-gray-300 rounded" />
      <div className="h-4 w-1/4 bg-gray-300 rounded" />
    </div>
  </div>
);

export default FeaturedListingShimmer;
