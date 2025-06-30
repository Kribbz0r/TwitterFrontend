import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../redux/slices/RegisterSlice";

export const store = configureStore({
    reducer: {}
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;