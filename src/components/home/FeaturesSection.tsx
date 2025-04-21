import React from 'react';
import {
  ShieldCheck,
  PhoneCall,
  MapPin,
  Handshake,
} from 'lucide-react';
import { motion } from 'framer-motion';

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

interface FeaturesSectionProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Verified Listings',
    description: 'Every property is verified to ensure accuracy and trust.',
  },
  {
    icon: PhoneCall,
    title: '24/7 Support',
    description: 'Our team is always available to assist you.',
  },
  {
    icon: MapPin,
    title: 'Location Insights',
    description: 'Get detailed info about neighborhoods and hotspots.',
  },
  {
    icon: Handshake,
    title: 'Trusted Partners',
    description: 'Work with certified builders and agents only.',
  },
];

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features = defaultFeatures }) => {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 mb-10">
          Discover the key benefits that set us apart from the competition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow hover:shadow-md transition duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-center items-center mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
