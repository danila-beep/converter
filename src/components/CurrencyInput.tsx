import React from "react";

interface CurrencyInputProps {
  value: number;
  onChange: (value: number) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = React.memo(({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseFloat(e.currentTarget.value) >= 0) {
      const newValue = parseFloat(e.target.value);
      onChange(newValue);
    }
    else {
      onChange(0)
    }
  };

  return <input type="number" value={value} onChange={handleInputChange} />;
})

export default CurrencyInput;
