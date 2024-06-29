import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { formApi } from "./services/formApi";

/**
 * The Redux store configuration.
 * @remarks
 * This store is configured with the specified reducers, middleware, and devTools settings.
 */
export const store = configureStore({
  reducer: {
    formReducer,
    [formApi.reducerPath]: formApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([formApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;