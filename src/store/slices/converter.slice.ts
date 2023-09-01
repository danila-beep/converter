import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { currencyService } from "../../utils/currencyService";

const initialState: InitialStateType = {
    currencies: {},
    isFetching: true
}

const slice = createSlice({
    name: "converter",
    initialState,
    reducers: {
        setCurrencies: (state, action: PayloadAction<CurrencyRates>) => {
            return {currencies: action.payload, isFetching: false}
        }
    }
})

export const converterReducer = slice.reducer
export const converterActions = slice.actions

export const getCurrenciesTC = () => (dispatch: Dispatch) => {
    currencyService.getCurrencies()
        .then(res => {
            converterActions.setCurrencies(res.data)
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
    isFetching: boolean
}