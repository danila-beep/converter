import React from 'react';

interface CurrencyInputProps {
  value: number;
  onChange: (value: number) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(newValue);
  };

  return (
    <input type="number" value={value} onChange={handleInputChange} />
  );
};

export default CurrencyInput;