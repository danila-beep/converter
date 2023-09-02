import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { converterReducer } from './slices/converter.slice';
import { appReducer } from './slices/app.slice';
// ...
const store = configureStore({
  reducer: {
    app: appReducer,
    converter: converterReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch 



export default store