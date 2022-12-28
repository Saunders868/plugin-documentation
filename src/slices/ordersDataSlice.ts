import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { orderDataInterface } from "../types";

const initialState: orderDataInterface[] = [{
  _id: "",
  user: "",
  cart: "",
  isCompleted: false,
  id: "",
  createdAt: "",
  updatedAt: "",
  __v: 0,
}];

export const ordersDataSlice: Slice = createSlice({
  name: "ordersData",
  initialState: initialState,
  reducers: {
    addOrdersData: (
      state: orderDataInterface[],
      { payload }: PayloadAction<orderDataInterface[]>
    ) => {
      return payload;
    }
  }
})

export const { addOrdersData } = ordersDataSlice.actions;

export default ordersDataSlice.reducer;