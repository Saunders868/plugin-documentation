import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { cartDataInterface } from "../types";

const initialState: cartDataInterface = {
  _id: "",
  userId: "",
  products: [
    {
      product_id: "",
      quantity: 0,
      title: "",
      price: 0,
      _id: "",
    },
  ],
  active: true,
  id: "",
  modifiedOn: "",
  createdAt: "",
  updatedAt: "",
  __v: 0,
};

export const cartDataSlice: Slice = createSlice({
  name: "cartData",
  initialState: initialState,
  reducers: {
    addCartData: (
      state: cartDataInterface,
      { payload }: PayloadAction<cartDataInterface>
    ) => {
      return payload;
    },
  },
});

export const { addCartData } = cartDataSlice.actions;

export default cartDataSlice.reducer;
