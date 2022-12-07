import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { dataType } from "../types";

const initalState: dataType = {
  data: {},
};

export const dataSlice: Slice = createSlice({
  name: "data",
  initialState: initalState,
  reducers: {
    addData: (state: dataType, action: PayloadAction<dataType>) => {
      state = action.payload;
    },
    removeData: (state: dataType) => {
      state = initalState;
    },
  },
});

export const { addData, removeData } = dataSlice.actions

export default dataSlice.reducer