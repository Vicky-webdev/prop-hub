// src/components/ui/FlyoutMenu.tsx
import React from 'react';

type FlyoutMenuProps = {
  columns: { heading: string; items: string[] }[];
};

const FlyoutMenu: React.FC<FlyoutMenuProps> = ({ columns }) => {
  return (
    <div className="absolute left-0 top-full mt-2 w-screen max-w-5xl bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 z-50 animate-fadeIn hidden group-hover:flex">
      <div className="w-full grid grid-cols-3 gap-6">
        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">{col.heading}</h4>
            <ul className="space-y-1">
              {col.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlyoutMenu;
