// src/components/FeaturedListings/types.ts
export interface Listing {
    id: string;
    title: string;
    by: string;
    location: string;
    type: string;
    priceRange: string;
    image: string;
    badge?: string;
  }
  
  export interface FeaturedListingsProps {
    listings: Listing[];
    title?: string;
    subtitle?: string;
    autoplay?: boolean;
    slidesToShow?: number;
    showWishlist?: boolean;
    showBadges?: boolean;
  }
  