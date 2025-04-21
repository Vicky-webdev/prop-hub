// src/components/ui/Navbar.tsx
import  { useState } from 'react';
import FlyoutMenu from './FlyoutMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const flyoutContent = [
    {
      heading: 'Category A',
      items: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
      heading: 'Category B',
      items: ['Option 4', 'Option 5', 'Option 6'],
    },
    {
      heading: 'Category C',
      items: ['Option 7', 'Option 8', 'Option 9'],
    },
    // Add more if you want 4 columns
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          RealEstatePro
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-sm font-medium text-gray-700 dark:text-gray-300 relative">
          <li className="relative group">
            <span className="cursor-pointer">Projects</span>
            <FlyoutMenu columns={flyoutContent} />
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-4 space-y-3">
          <a href="#" className="block">Projects</a>
          <a href="#" className="block">About</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
