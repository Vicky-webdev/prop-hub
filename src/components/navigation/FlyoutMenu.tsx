// src/components/navigation/FlyoutMenu.tsx
import React, { useState } from 'react';
import { ChevronDown, Home, Building, User, Briefcase, BarChart2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuData = [
  {
    title: 'For Buyers',
    icon: Home,
    items: [
      { label: 'Buy Property', href: '/buy' },
      { label: 'New Projects', href: '/projects' },
      { label: 'Explore Localities', href: '/localities' },
    ],
  },
  {
    title: 'For Tenants',
    icon: Building,
    items: [
      { label: 'Rent Homes', href: '/rent' },
      { label: 'Furnished Homes', href: '/furnished' },
      { label: 'PG/Coliving', href: '/pg' },
    ],
  },
  {
    title: 'For Owners',
    icon: User,
    items: [
      { label: 'Post Property Free', href: '/post' },
      { label: 'Manage Listings', href: '/manage' },
      { label: 'Owner Dashboard', href: '/dashboard/owner' },
    ],
  },
  {
    title: 'For Dealers / Builders',
    icon: Briefcase,
    items: [
      { label: 'Ad Packages', href: '/ads' },
      { label: 'CRM Access', href: '/crm' },
      { label: 'Dealer Dashboard', href: '/dashboard/dealer' },
    ],
  },
  {
    title: 'Insights',
    icon: BarChart2,
    items: [
      { label: 'Market Trends', href: '/trends' },
      { label: 'News & Updates', href: '/news' },
      { label: 'Investment Tips', href: '/tips' },
    ],
  },
];

const FlyoutMenu: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="relative">
      {/* Desktop */}
      <ul className="hidden md:flex gap-6">
        {menuData.map((menu, index) => (
          <li
            key={menu.title}
            className="relative group"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
            >
              <menu.icon className="w-4 h-4" />
              {menu.title}
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Flyout */}
            {activeIndex === index && (
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg grid grid-cols-3 gap-4 p-4 animate-slideUp z-50 w-[700px]">
                {menu.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block text-sm px-2 py-1 rounded hover:bg-blue-50 transition ${isActive(item.href) ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-700"
        >
          Menu
        </button>
        {mobileOpen && (
          <div className="bg-white shadow rounded p-4 space-y-4 mt-2">
            {menuData.map((menu) => (
              <div key={menu.title}>
                <p className="font-semibold text-gray-800 mb-1 flex items-center gap-1">
                  <menu.icon className="w-4 h-4" /> {menu.title}
                </p>
                <div className="pl-4 space-y-1">
                  {menu.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`block text-sm hover:text-blue-600 ${isActive(item.href) ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default FlyoutMenu;
