import axios from "axios";

const currencyInstance = axios.create({
  baseURL:
    "https://thingproxy.freeboard.io/fetch/https://api.coingate.com/v2/rates",
  headers: {},
});

export const currencyService = {
  getCurrencies: () => {
    return currencyInstance.get("/merchant")
  },
  getExchangeRate: (from: string, to: string) => {
    return currencyInstance.get(`/merchant/${from}/${to}`);
  },
};
