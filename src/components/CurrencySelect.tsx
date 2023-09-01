import React from "react";

interface CurrencySelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  options,
  onChange,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <select value={value} onChange={handleSelectChange}>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default CurrencySelect;
