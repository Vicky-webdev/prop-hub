// src/components/ContactAgent.tsx
import { FC } from "react";
import { ShieldCheck, PhoneCall } from "lucide-react";

const ContactAgent: FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Agent</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Agent Card */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 border rounded-xl w-full md:w-1/3 shadow-sm">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Agent"
            className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <div className="flex items-center gap-1 text-gray-800 font-medium">
              John Kumar <ShieldCheck className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <PhoneCall className="w-4 h-4" /> +91 98765 43210
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={3}
              placeholder="Your message"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactAgent;
