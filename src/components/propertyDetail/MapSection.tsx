// src/components/MapSection.tsx
import { FC, useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface MapSectionProps {
  location: string;
}

const MapSection: FC<MapSectionProps> = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);
  const mapQuery = encodeURIComponent(location);

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBliJG4P1NbUzbjQZ6nmCxjsNyBSli_34A&q=${mapQuery}&zoom=15&maptype=roadmap`;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <section className="bg-white rounded-2xl shadow-md p-5 mt-6 relative">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Location</h2>

      <div className="relative w-full h-64 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        {isLoading ? (
          <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_1.5s_infinite] rounded-xl" />
        ) : (
          <>
            <iframe
              title="Property Location"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src={mapSrc}
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 bg-white text-sm flex items-center gap-2 px-3 py-1.5 shadow-md rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <MapPin className="w-4 h-4 text-blue-500" />
              View Larger Map
            </a>
          </>
        )}
      </div>

      <p className="mt-2 text-sm text-gray-500">Location: {location}</p>

      {/* Keyframe shimmer animation (Tailwind plugin or inline below) */}
      <style>
        {`
        @keyframes shimmer {
          0% { background-position: -100% 0 }
          100% { background-position: 100% 0 }
        }
        .animate-[shimmer_1.5s_infinite] {
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite linear;
        }
        `}
      </style>
    </section>
  );
};

export default MapSection;
