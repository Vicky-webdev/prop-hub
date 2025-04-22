import React from "react";
import * as Slider from "@radix-ui/react-slider";

interface AreaRangeProps {
  minArea: string;
  maxArea: string;
  onAreaChange: (minArea: string, maxArea: string) => void;
}

const AreaRange: React.FC<AreaRangeProps> = ({ minArea, maxArea, onAreaChange }) => {
  const handleSliderChange = (values: number[]) => {
    onAreaChange(values[0].toString(), values[1].toString());
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Area Range</h3>
      <Slider.Root
        className="flex items-center w-full"
        min={0}
        max={5000}
        step={1}
        defaultValue={[parseInt(minArea), parseInt(maxArea)]}
        onValueChange={handleSliderChange}
      >
        <Slider.Track className="relative flex-1 h-2 bg-gray-200 rounded-full">
          <Slider.Range className="absolute bg-indigo-600 rounded-full h-2" />
        </Slider.Track>
        <Slider.Thumb className="block w-4 h-4 bg-indigo-600 rounded-full" />
        <Slider.Thumb className="block w-4 h-4 bg-indigo-600 rounded-full" />
      </Slider.Root>

      <div className="flex justify-between text-sm text-gray-600">
        <span>{minArea} sqft</span>
        <span>{maxArea} sqft</span>
      </div>
    </div>
  );
};

export default AreaRange;
