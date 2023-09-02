import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "app",
    initialState: {
        isAppInitialized: false
    },
    reducers: {
        setAppInitialized: (state) => {
            state.isAppInitialized = true
        }
    }
})

export const appReducer = slice.reducer
export const appActions = slice.actions