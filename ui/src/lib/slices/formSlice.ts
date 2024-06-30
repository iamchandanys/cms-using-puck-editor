import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormState = {
  myHost: string;
  puckInitialData: any;
};

const initialState = {
  myHost: "",
  puckInitialData: {},
} as FormState;

/**
 * Represents a slice of the form state in the Redux store.
 */
export const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    /**
     * Resets the form state to its initial values.
     */
    reset: () => initialState,

    /**
     * Sets the host value in the form state.
     * @param state - The current form state.
     * @param action - The Redux action containing the new host value.
     */
    setHost: (state, action: PayloadAction<string>) => {
      state.myHost = action.payload;
    },
    setPuckInitialData: (state, action: PayloadAction<any>) => {
      state.puckInitialData = action.payload;
    },
  },
});

export const { setHost, reset, setPuckInitialData } = form.actions;

export default form.reducer;
