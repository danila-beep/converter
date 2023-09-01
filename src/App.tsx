import React, { useEffect } from "react";
import "./App.css";

import { GlobalStyles } from "./customStyles/GlobalStyles";
import Converter from "./components/Converter";
import axios from "axios";
import { getCurrenciesTC } from "./store/slices/converter.slice";
import { useAppDispatch, useAppSelector } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  const currenciesData = useAppSelector((state) => state.converter.currencies);

  useEffect(() => {
    dispatch(getCurrenciesTC())
  }, [dispatch]);

  return (
    <div className="App">
      <GlobalStyles />
      <Converter />
    </div>
  );
}

export default App;
