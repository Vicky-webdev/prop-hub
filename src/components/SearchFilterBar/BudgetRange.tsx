import React from "react";

export interface BudgetRangeProps {
  min: number;
  max: number;
  onChange: ({ min, max }: { min: number; max: number }) => void;
}

const BudgetRange: React.FC<BudgetRangeProps> = ({ min, max, onChange }) => {
  return (
    <div className="flex gap-3">
      <input
        type="number"
        value={min}
        onChange={(e) => onChange({ min: Number(e.target.value), max })}
        placeholder="Min Budget"
        className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        value={max}
        onChange={(e) => onChange({ min, max: Number(e.target.value) })}
        placeholder="Max Budget"
        className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default BudgetRange;
