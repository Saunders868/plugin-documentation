import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { dataType } from "../types";

const initalState: dataType = {
  data: {},
};

export const dataSlice: Slice = createSlice({
  name: "data",
  initialState: initalState,
  reducers: {
    addData: (state: dataType, { payload }: PayloadAction<object>) => {
      state.data = payload;
    },
  },
});

export const { addData, removeData } = dataSlice.actions;

export default dataSlice.reducer;
