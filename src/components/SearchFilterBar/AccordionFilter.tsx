// src/components/SearchFilterBar/AccordionFilter.tsx

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionFilterProps {
  title: string;
  children: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  defaultOpen?: boolean;
}

const AccordionFilter: React.FC<AccordionFilterProps> = ({
  title,
  children,
  clearable = false,
  onClear,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b">
      <div
        className="flex items-center justify-between py-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-800">{title}</span>
          {clearable && isOpen && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClear && onClear();
              }}
              className="text-blue-600 text-sm underline ml-2"
            >
              Clear
            </button>
          )}
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

export default AccordionFilter;
