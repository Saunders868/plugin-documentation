import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { loadErrorType } from "../types";

const initialState: loadErrorType = {
  loading: false,
  error: false,
};

export const loadErrorSlice: Slice = createSlice({
  name: "loadError",
  initialState: initialState,
  reducers: {
    loading: (state: loadErrorType, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    errorState: (state: loadErrorType, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { loading, errorState } = loadErrorSlice.actions;

export default loadErrorSlice.reducer;
