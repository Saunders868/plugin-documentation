import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { sessionType } from "../types";

const initialState: sessionType = {
  accessToken: "",
  refreshToken: "",
};

export const sessionSlice: Slice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    loggedIn: (state: sessionType, action: PayloadAction<sessionType>) => {
      state = action.payload;
    },
    loggedOut: (state: sessionType) => {
      state = initialState;
    },
  },
});

export const { loggedIn, loggedOut } = sessionSlice.actions

export default sessionSlice.reducer

