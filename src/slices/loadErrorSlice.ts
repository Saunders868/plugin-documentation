import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { loadErrorType } from "../types";



const initialState: loadErrorType = {
  loading: false,
  error: false,
  makeRequest: false,
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
    makeRequest: (state: loadErrorType, action: PayloadAction<boolean>) => {
      state.makeRequest = action.payload;
    },
  },
});

export const { loading, errorState, makeRequest } = loadErrorSlice.actions;

export default loadErrorSlice.reducer;
