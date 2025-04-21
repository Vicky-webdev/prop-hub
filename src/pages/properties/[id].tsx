import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

import {
  ImageBannerShimmer,
  OverviewShimmer,
  AmenitiesShimmer,
  MapShimmer,
  ContactAgentShimmer,
} from "../../components/shimmer/DetailPageShimmers";
import Button from "../../components/ui/Button";

import { Property } from "../../types/types";
import ImageBanner from "../../components/propertyDetail/ImageBanner";
import PropertyOverview from "../../components/propertyDetail/PropertyOverview";
import Amenities from "../../components/propertyDetail/Amenities";
import MapSection from "../../components/propertyDetail/MapSection";
import ContactAgent from "../../components/propertyDetail/ContactAgent";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await import("../../data/mockProperties.json");
      const found = data.default.find((item) => item.id === parseInt(id || "0"));
      setTimeout(() => {
        setProperty(found || null);
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (property) {
      const stored = localStorage.getItem("wishlist");
      const wishlist: number[] = stored ? JSON.parse(stored) : [];
      setWishlisted(wishlist.includes(property.id));
    }
  }, [property]);

  const handleToggleWishlist = () => {
    if (!property) return;
    const stored = localStorage.getItem("wishlist");
    let wishlist: number[] = stored ? JSON.parse(stored) : [];

    if (wishlist.includes(property.id)) {
      wishlist = wishlist.filter((id) => id !== property.id);
    } else {
      wishlist.push(property.id);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setWishlisted(!wishlisted);
  };

  useEffect(() => {
    document.title = "Property Details | Dream Homes";
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6 mt-6">
        <ImageBannerShimmer />
        <OverviewShimmer />
        <AmenitiesShimmer />
        <MapShimmer />
        <ContactAgentShimmer />
      </div>
    );
  }

  if (!property) {
    return <p className="text-center mt-6">Property not found</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow">
      <div
        className="mb-4 text-sm text-blue-600 cursor-pointer hover:underline"
        onClick={() => navigate(-1)}
      >
        <Button variant="danger" iconRight={<ArrowLeft />} >
          Back to Listings
        </Button>
      </div>

      <ImageBanner
        image={property.image}
        title={property.title}
        location={property.location}
        price={property.budget}
        isWishlisted={wishlisted}
        onToggleWishlist={handleToggleWishlist}
      />

      <PropertyOverview
        bhk={property.bhk ?? "NA"}
        area={property.area ?? "Not specified"}
        type={property.type}
        status={property.status}
        furnishing={property.furnishing}
        parking={property.parking}
        possession={property.possession}
      />

      <Amenities amenities={property?.amenities || []} />
      <MapSection location={property.location} />

      {/* Only render ContactAgent when not loading */}
      {property && !loading && <ContactAgent />}
    </div>
  );
};

export default PropertyDetailPage;
