import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { productDataInterface } from "../types";

const initalState: productDataInterface = {
  _id: "",
  user: "",
  title: "",
  desc: "",
  price: 0,
  image: "",
  id: "",
  createdAt: "",
  updatedAt: "",
  __v: 0,
};
export const productDataSlice: Slice = createSlice({
  name: "productData",
  initialState: initalState,
  reducers: {
    addProductData: (
      state: productDataInterface,
      { payload }: PayloadAction<productDataInterface>
    ) => {
      return payload;
    },
  },
});

export const { addProductData } = productDataSlice.actions;

export default productDataSlice.reducer;
