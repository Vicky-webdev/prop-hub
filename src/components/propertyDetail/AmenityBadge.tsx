// src/components/ui/AmenityBadge.tsx
import { FC } from "react";
import { LucideIcon, ShieldCheck, Fan, TreePalm, Droplets, Camera, Battery } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "Power Backup": Battery,
  "24x7 Security": ShieldCheck,
  "Park": TreePalm,
  "Rainwater Harvesting": Droplets,
  "CCTV": Camera,
  "Water Supply": Fan,
};

interface AmenityBadgeProps {
  label: string;
}

const AmenityBadge: FC<AmenityBadgeProps> = ({ label }) => {
  const Icon = iconMap[label] || ShieldCheck;

  return (
    <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-xl text-sm shadow-sm hover:shadow-md transition">
      <Icon className="w-4 h-4 text-blue-500" />
      <span>{label}</span>
    </div>
  );
};

export default AmenityBadge;
