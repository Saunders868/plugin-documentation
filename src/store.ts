import { configureStore } from "@reduxjs/toolkit";
import {
  cartDataSlice,
  cartsDataSlice,
  dataSlice,
  loadErrorSlice,
  productDataSlice,
  productsDataSlice,
  sessionSlice,
  userDataSlice,
  usersDataSlice,
  userSlice,
} from "./slices";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userSlice,
    session: sessionSlice,
    data: dataSlice,
    loadError: loadErrorSlice,
    usersData: usersDataSlice,
    userData: userDataSlice,
    productsData: productsDataSlice,
    productData: productDataSlice,
    cartData: cartDataSlice,
    cartsData: cartsDataSlice,
  },
});
