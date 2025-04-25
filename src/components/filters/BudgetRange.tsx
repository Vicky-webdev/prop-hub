// src/components/filters/BudgetRange.tsx
 
// src/components/filters/BudgetRange.tsx
type Props = {
    label: string;
    min: number;
    max: number;
    value: { min: number; max: number };
    onChange: (value: { min: number; max: number }) => void;
  };
  
  const BudgetRange = ({ label, min, max, value, onChange }: Props) => {
    return (
      <div className="space-y-2">
        <label className="font-medium text-sm">{label}</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={value.min}
            min={min}
            max={max}
            onChange={(e) => onChange({ ...value, min: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-full"
            placeholder="Min"
          />
          <input
            type="number"
            value={value.max}
            min={min}
            max={max}
            onChange={(e) => onChange({ ...value, max: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-full"
            placeholder="Max"
          />
        </div>
      </div>
    );
  };
  
  export default BudgetRange;
  
