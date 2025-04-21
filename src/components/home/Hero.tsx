// Removed unused React import
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/assets/images/1.jpeg')", 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Your Gateway to Prime Real Estate in India
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Buy. Build. Promote. Explore verified plots and properties tailored for you.
        </p>
        <Link
          to="/properties"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
        >
          Explore Properties
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
