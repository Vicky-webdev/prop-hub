import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const BHKSelector: React.FC<Props> = ({ value, onChange }) => {
  const current = parseInt(value || "0");

  const increment = () => {
    onChange((current + 1).toString());
  };

  const decrement = () => {
    if (current > 0) onChange((current - 1).toString());
  };

  return (
    <div>
      <label className="text-sm font-medium block mb-1">BHK</label>
      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          className="px-3 py-1 border rounded bg-gray-100 text-lg"
        >
          -
        </button>
        <span className="min-w-[32px] text-center">{current}</span>
        <button
          onClick={increment}
          className="px-3 py-1 border rounded bg-gray-100 text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BHKSelector;
