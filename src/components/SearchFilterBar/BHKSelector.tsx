import React, { useState } from "react";

interface BHKSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const BHKSelector: React.FC<BHKSelectorProps> = ({ value, onChange }) => {
  const [quantity, setQuantity] = useState(parseInt(value));

  const handleIncrease = () => {
    if (quantity < 10) setQuantity(quantity + 1); // Limit to 10 BHK for now
  };

  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleChange = () => {
    onChange(quantity.toString());
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleDecrease}
        className="bg-gray-200 p-2 rounded-lg"
      >
        -
      </button>
      <span>{quantity} BHK</span>
      <button
        onClick={handleIncrease}
        className="bg-gray-200 p-2 rounded-lg"
      >
        +
      </button>
      <button
        onClick={handleChange}
        className="ml-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Apply
      </button>
    </div>
  );
};

export default BHKSelector;
