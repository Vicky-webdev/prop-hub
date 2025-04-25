// src/components/filters/FilterBadge.tsx
type FilterBadgeProps = {
    label: string;
    onClear: () => void;
  };
  
  export const FilterBadge = ({ label, onClear }: FilterBadgeProps) => {
    return (
      <div className="inline-flex items-center text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
        {label}
        <button
          onClick={onClear}
          className="ml-2 text-gray-500 hover:text-red-500 focus:outline-none"
        >
          ✕
        </button>
      </div>
    );
  };
  