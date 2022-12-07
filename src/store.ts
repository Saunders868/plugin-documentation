import { configureStore } from "@reduxjs/toolkit";
import { dataSlice, loadErrorSlice, sessionSlice, userSlice } from "./slices";


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userSlice,
    session: sessionSlice,
    data: dataSlice,
    loadError: loadErrorSlice
  },
});
