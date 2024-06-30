import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { formApi } from "./services/formApi";

const persistConfig: PersistConfig<any, any, any, any> = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, formReducer);

export const store = configureStore({
  reducer: {
    formReducer: persistedReducer,
    [formApi.reducerPath]: formApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(formApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;