import { motion } from "framer-motion";
import { ListingSlider } from "./ListingSlider";
import { mockProperties } from "./mockProperties";

const FeaturedListings = () => (
  <motion.section
    className="py-10 px-4 md:px-10 lg:px-20 bg-gray-50"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800">🏡 Featured Listings</h2>
      <p className="text-gray-600 mt-2">Top properties hand-picked just for you</p>
    </div>
    <ListingSlider listings={mockProperties} />
  </motion.section>
);

export default FeaturedListings;
