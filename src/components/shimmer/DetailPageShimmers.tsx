const shimmerBase = "bg-gray-300 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:400%_100%] motion-safe:animate-shimmer";

// ImageBanner Shimmer
const ImageBannerShimmer = () => (
  <div className={`w-full h-64 md:h-96 rounded-lg mb-4 ${shimmerBase} motion-safe:animate-fadeIn`} />
);

// Overview Section Shimmer
const OverviewShimmer = () => (
  <div className="space-y-4 p-4 motion-safe:animate-slideUp">
    <div className="h-6 w-3/4 rounded bg-gray-300" />
    <div className="h-4 w-full rounded bg-gray-200" />
    <div className="h-4 w-5/6 rounded bg-gray-200" />
  </div>
);

// Amenities Section Shimmer
const AmenitiesShimmer = () => (
  <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 motion-safe:animate-slideUp">
    {Array(8).fill(0).map((_, i) => (
      <div key={i} className="h-6 rounded bg-gray-200" />
    ))}
  </div>
);

// Map Section Shimmer
const MapShimmer = () => (
  <div className="h-64 rounded bg-gray-300 motion-safe:animate-fadeIn" />
);

// Contact Agent Section Shimmer
const ContactAgentShimmer = () => (
  <div className="space-y-6 p-4 motion-safe:animate-slideUp">
    {/* Agent Section Shimmer */}
    <div className="space-y-4">
      <div className={`w-16 h-16 rounded-full ${shimmerBase}`} />
      <div className="space-y-3">
        <div className={`h-4 w-2/3 rounded ${shimmerBase}`} />
        <div className={`h-3 w-1/2 rounded ${shimmerBase}`} />
      </div>
    </div>

    {/* Contact Form Shimmer */}
    <div className="space-y-4 motion-safe:animate-slideUp">
      <div className={`h-5 w-1/4 rounded ${shimmerBase}`} />
      <div className={`h-16 w-full rounded-lg ${shimmerBase}`} />
      <div className={`h-5 w-1/4 rounded ${shimmerBase}`} />
      <div className={`h-16 w-full rounded-lg ${shimmerBase}`} />
      <div className={`h-5 w-1/4 rounded ${shimmerBase}`} />
      <div className={`h-24 w-full rounded-lg ${shimmerBase}`} />
      <div className={`h-12 w-full rounded-lg ${shimmerBase}`} />
    </div>
  </div>
);



export {
  ImageBannerShimmer,
  OverviewShimmer,
  AmenitiesShimmer,
  MapShimmer,
  ContactAgentShimmer,
};
