import React, { useState, useEffect } from "react";
import CurrencyInput from "./CurrencyInput";
import CurrencySelect from "./CurrencySelect";
import { currencyService } from "../utils/currencyService";
import { cryptoCurrencies } from "../constants/currencies";
import { cutBrackets } from "../utils/cutBrackets";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getCurrenciesTC } from "../store/slices/converter.slice";

const Converter: React.FC = () => {
  const dispatch = useAppDispatch();
  const currenciesData = useAppSelector((state) => state.converter.currencies);



  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState(currenciesData[0]);
  const [targetCurrency, setTargetCurrency] = useState("Bitcoin (BTC)+ ⚡");
  const [exchangeRate, setExchangeRate] = useState(0);

  const handleBaseCurrencyChange = (currency: string) => {
    setBaseCurrency(currency);
  };

  const handleTargetCurrencyChange = (currency: string) => {
    setTargetCurrency(currency);
  };

  const handleAmountChange = (value: number) => {
    setAmount(value);
  };

  const convertedAmount = amount * exchangeRate;

  return (
    <div>
      <h2>Currency Converter</h2>
      <CurrencyInput value={amount} onChange={handleAmountChange} />
      <CurrencySelect
        value={baseCurrency}
        options={cryptoCurrencies}
        onChange={handleBaseCurrencyChange}
      />
      <CurrencySelect
        value={targetCurrency}
        options={cryptoCurrencies}
        onChange={handleTargetCurrencyChange}
      />
      <p>
        {amount} {baseCurrency} = {convertedAmount} {targetCurrency}
      </p>
    </div>
  );
};

export default Converter;
