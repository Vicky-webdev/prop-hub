import React from "react";
import * as Slider from "@radix-ui/react-slider";

interface BudgetRangeProps {
  minValue: number;
  maxValue: number;
  onChange: (minValue: number, maxValue: number) => void;
}

const BudgetRange: React.FC<BudgetRangeProps> = ({ minValue, maxValue, onChange }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Budget Range</h3>
      <Slider.Root
        className="relative flex items-center select-none touch-none h-2 bg-gray-200 rounded-md mt-4"
        value={[minValue, maxValue]}
        onValueChange={(value) => onChange(value[0], value[1])}
        min={0}
        max={10000000}
        step={100000}
      >
        <Slider.Track className="bg-gray-300 relative grow rounded-md h-2">
          <Slider.Range className="absolute bg-blue-500 rounded-md h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-4 h-4 bg-blue-600 rounded-full shadow-md cursor-pointer" />
        <Slider.Thumb className="block w-4 h-4 bg-blue-600 rounded-full shadow-md cursor-pointer" />
      </Slider.Root>
      <div className="flex justify-between text-sm mt-2">
        <span>₹{minValue.toLocaleString()}</span>
        <span>₹{maxValue.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default BudgetRange;
