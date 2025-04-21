// src/components/sections/AmenitiesSection.tsx
import { FC } from "react";
import { motion } from "framer-motion";
import AmenityBadge from "./AmenityBadge";
import { Property } from "../../types/types";

interface Props {
  amenities: Property["amenities"];
}

const Amenities: FC<Props> = ({ amenities }) => {
  if (!amenities || amenities.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Amenities</h2>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {amenities.map((item, idx) => (
          <motion.div
            key={idx}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <AmenityBadge label={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Amenities;
