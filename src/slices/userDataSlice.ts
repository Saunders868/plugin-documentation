import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { userDataInterface } from "../types";

const initialUserState: userDataInterface = {
  passwordConfirmation: "",
  profile: {
    address: {
      street1: "",
      street2: "",
      city: "",
      state: "",
      country: "",
      zip: "",
    },
    firstName: "",
    lastName: "",
    avatar: "",
    bio: "",
  },
  _id: "",
  username: "",
  email: {
    address: "",
    validated: true,
    _id: "",
  },
  password: "",
  active: true,
  isAdmin: false,
  createdAt: "",
  updatedAt: "",
  __v: 0,
};
export const userDataSlice: Slice = createSlice({
  name: "userData",
  initialState: initialUserState,
  reducers: {
    addUserData: (
      state: userDataInterface,
      { payload }: PayloadAction<userDataInterface>
    ) => {
      return payload
    },
  },
});

export const { addUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
