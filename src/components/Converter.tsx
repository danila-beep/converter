import React, { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import CurrencySelect from "./CurrencySelect";
import { useAppDispatch, useAppSelector } from "../store/store";
import { converterActions } from "../store/slices/converter.slice";

const Converter = () => {
  const dispatch = useAppDispatch();
  const currenciesData = useAppSelector((state) => state.converter.currencies);
  const baseCurrency = useAppSelector((state) => state.converter.baseCurrency);
  const targetCurrency = useAppSelector(
    (state) => state.converter.targetCurrency
  );

  const [exchangeInputValue, setExchangeInputValue] = useState(0);
  const exchangeInputSetter = (value: number) => {
    setExchangeInputValue(value);
  };

  const getAvailableBaseExchangeValue = () => {
    let arrayOfValues = [];
    for (const key in currenciesData) {
      arrayOfValues.push(key);
    }
    return arrayOfValues;
  };

  const getAvailableTargetExchangeValue = () => {
    let arrayOfValues = [];
    for (const key in currenciesData[baseCurrency]) {
      arrayOfValues.push(key);
    }
    return arrayOfValues;
  };

  const setBaseCurrency = (value: string) => {
    dispatch(converterActions.setBaseCurrency({ baseCurrency: value }));
  };
  const setTargetCurrency = (value: string) => {
    dispatch(converterActions.setTargetCurrency({ targetCurrency: value }));
  };

  const targetExchangeValue = Number(currenciesData[baseCurrency][targetCurrency]) * exchangeInputValue



  return (
    <div>
      <CurrencyInput
        value={exchangeInputValue}
        onChange={exchangeInputSetter}
      />

      <CurrencySelect
        value={baseCurrency}
        options={getAvailableBaseExchangeValue()}
        onChange={setBaseCurrency}
      />
      <CurrencySelect
        value={targetCurrency}
        options={getAvailableTargetExchangeValue()}
        onChange={setTargetCurrency}
      />

      <div>
        <p style={{color: "white"}}>
          {exchangeInputValue} {baseCurrency} = {targetExchangeValue} {targetCurrency}
        </p>
      </div>
    </div>
  );
};

export default Converter;
