import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-10 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-4">RealtyHub</h3>
          <p className="text-sm">
            Leading property platform for buying, selling, and renting homes across India.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-blue-600"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-pink-500"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-700"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Browse Properties</a></li>
            <li><a href="#" className="hover:text-blue-600">Login</a></li>
            <li><a href="#" className="hover:text-blue-600">Register</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" /> support@realtyhub.in
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" /> Chennai, India
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Newsletter</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm py-2 rounded-md flex items-center justify-center gap-2"
            >
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t pt-4">
        © 2025 RealtyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;