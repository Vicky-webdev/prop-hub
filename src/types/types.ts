export interface Property {
  id: number;
  title: string;
  location: string;
  propertyType: string;
  bhk?: string;
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

export type Filters = {
  bhk: string[];
  propertyType: string[];
  budget: {
    min: number;
    max: number;
  };
  area: {
    min: number;
    max: number;
  };
  location: string;
};
