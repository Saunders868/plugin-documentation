import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { orderDataInterface } from "../types";

const initialState: orderDataInterface = {
  _id: "",
  user: "",
  cart: "",
  isCompleted: false,
  id: "",
  createdAt: "",
  updatedAt: "",
  __v: 0,
};

export const orderDataSlice: Slice = createSlice({
  name: "orderData",
  initialState: initialState,
  reducers: {
    addOrderData: (
      state: orderDataInterface,
      { payload }: PayloadAction<orderDataInterface>
    ) => {
      return payload;
    }
  }
})

export const { addOrderData } = orderDataSlice.actions;

export default orderDataSlice.reducer;