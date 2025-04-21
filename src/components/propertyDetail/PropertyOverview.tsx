// src/components/propertyDetail/PropertyOverview.tsx

import {
  Home,
  Ruler,
  Building2,
  Hammer,
  Sofa,
  Car,
  CalendarCheck,
} from "lucide-react";

interface PropertyOverviewProps {
  bhk: string;
  area: string;
  type: string;
  status: string;
  furnishing: string;
  parking: string;
  possession: string;
}

const infoItems = [
  {
    label: "Property Type",
    icon: Building2,
    key: "type",
  },
  {
    label: "BHK",
    icon: Home,
    key: "bhk",
  },
  {
    label: "Area",
    icon: Ruler,
    key: "area",
  },
  {
    label: "Status",
    icon: Hammer,
    key: "status",
  },
  {
    label: "Furnishing",
    icon: Sofa,
    key: "furnishing",
  },
  {
    label: "Parking",
    icon: Car,
    key: "parking",
  },
  {
    label: "Possession",
    icon: CalendarCheck,
    key: "possession",
  },
];

const PropertyOverview = (props: PropertyOverviewProps) => {
  return (
    <section className="mt-6">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2">Property Overview</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {infoItems.map(({ label, icon: Icon, key }) => (
          <div
            key={key}
            className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm"
          >
            <Icon className="w-5 h-5 text-blue-500 mr-3" />
            <div>
              <div className="text-gray-600 text-sm">{label}</div>
              <div className="text-base font-medium">{props[key as keyof PropertyOverviewProps]}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyOverview;
