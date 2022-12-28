import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { cartDataInterface } from "../types";

const initalState: cartDataInterface[] = [
  {
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
  },
];

export const cartsDataSlice: Slice = createSlice({
  name: "cartsData",
  initialState: initalState,
  reducers: {
    addCartsData: (
      state: cartDataInterface[],
      { payload }: PayloadAction<cartDataInterface[]>
    ) => {
      return payload;
    },
  },
});

export const { addCartsData } = cartsDataSlice.actions;

export default cartsDataSlice.reducer;
