import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { currencyService } from "../../utils/currencyService";
import { appActions } from "./app.slice";

const initialState: InitialStateType = {
    currencies: {},
    baseCurrency: "BTC",
    targetCurrency: "USD",
    isFetching: true
}

const slice = createSlice({
    name: "converter",
    initialState,
    reducers: {
        setCurrencies: (state, action: PayloadAction<CurrencyRates>) => {
            return {...state, currencies: action.payload, isFetching: false}
        },
        setBaseCurrency: (state, action: PayloadAction<{baseCurrency: string}>) => {
            state.baseCurrency = action.payload.baseCurrency
        },
        setTargetCurrency: (state, action: PayloadAction<{targetCurrency: string}>) => {
            state.targetCurrency = action.payload.targetCurrency
        },
    }
})

export const converterReducer = slice.reducer
export const converterActions = slice.actions

export const getCurrenciesTC = () => (dispatch: Dispatch) => {
    currencyService.getCurrencies()
        .then(res => {
            dispatch(converterActions.setCurrencies(res.data))
            dispatch(appActions.setAppInitialized())
        })
        .catch(e => {
            console.log(e.message);
        })
}

type CurrencyValue = {
    [key: string]: string
}
type CurrencyRates = {
    [key: string]: CurrencyValue
}

type InitialStateType = {
    currencies: CurrencyRates,
    baseCurrency: string,
    targetCurrency: string,
    isFetching: boolean,
}