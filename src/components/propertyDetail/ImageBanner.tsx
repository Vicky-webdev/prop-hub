import { Heart, Share2 } from "lucide-react";

interface ImageBannerProps {
  image: string;
  title: string;
  location: string;
  price: number;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

const ImageBanner = ({
  image,
  title,
  location,
  price,
  isWishlisted,
  onToggleWishlist,
}: ImageBannerProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-10 gap-4 mb-6 rounded-xl overflow-hidden">
      {/* Left - Big Image (70%) */}
      <div className="relative col-span-1 md:col-span-7 group overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] md:h-[450px] object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex gap-3">
          <button
            onClick={onToggleWishlist}
            className="bg-white/80 p-2 rounded-full hover:bg-white shadow"
          >
            <Heart
              className={`h-5 w-5 ${
                isWishlisted ? "text-red-500 fill-red-500" : "text-gray-500"
              }`}
            />
          </button>
          <button className="bg-white/80 p-2 rounded-full hover:bg-white shadow">
            <Share2 className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm">{location}</p>
          <p className="text-lg font-bold mt-1">₹ {price.toLocaleString()}</p>
        </div>
      </div>

      {/* Right - 2 Images (30%) */}
      <div className="col-span-1 md:col-span-3 grid grid-rows-2 gap-4">
        <div className="relative group rounded-xl overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200?text=Locality"
            alt="Locality"
            className="w-full h-[140px] md:h-[215px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm px-3 py-1">
            Locality
          </div>
        </div>
        <div className="relative group rounded-xl overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200?text=All+Photos"
            alt="All Photos"
            className="w-full h-[140px] md:h-[215px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm px-3 py-1">
            All Photos
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
