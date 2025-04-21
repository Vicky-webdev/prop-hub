import React from "react";

interface Props {
  min: string;
  max: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
}

const AreaRange: React.FC<Props> = ({ min, max, onMinChange, onMaxChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Area (sq.ft)</label>
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Min"
          className="w-1/2 border rounded-md px-3 py-2"
          value={min}
          onChange={(e) => onMinChange(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max"
          className="w-1/2 border rounded-md px-3 py-2"
          value={max}
          onChange={(e) => onMaxChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AreaRange;
