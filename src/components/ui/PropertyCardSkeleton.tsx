const PropertyCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 overflow-hidden">
      {/* Image shimmer */}
      <div className="relative h-48 rounded-lg bg-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer" />
      </div>

      {/* Title */}
      <div className="relative h-4 w-3/4 bg-gray-300 rounded overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-shimmer" />
      </div>

      {/* Location */}
      <div className="relative h-3 w-1/2 bg-gray-300 rounded overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-shimmer" />
      </div>

      {/* Property Type */}
      <div className="relative h-3 w-1/3 bg-gray-200 rounded overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer" />
      </div>

      {/* BHK + Price */}
      <div className="flex justify-between gap-4">
        {[1, 2].map((i) => (
          <div key={i} className="relative h-4 w-1/4 bg-gray-300 rounded overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-shimmer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;
