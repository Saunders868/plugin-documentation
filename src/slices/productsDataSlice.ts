import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { productDataInterface } from "../types";

const initalState: productDataInterface[] = [
  {
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
  },
];

export const productsDataSlice: Slice = createSlice({
  name: "productsData",
  initialState: initalState,
  reducers: {
    addProductsData: (
      state: productDataInterface[],
      { payload }: PayloadAction<productDataInterface[]>
    ) => {
      return payload;
    },
  },
});

export const { addProductsData } = productsDataSlice.actions;

export default productsDataSlice.reducer;
