// src/types.ts
export interface Property {
  id: number;
  title: string;
  location: string;
  propertyType: string;
  bhk?: string; // optional, can be undefined
  budget: number;
  area?: string;
  image: string;
  by?: string;
  badge?: string;
  priceRange?: string;
  type: string;
  status: string;
  furnishing: string;
  parking: string;
  possession: string;
  amenities?: string[];
}
