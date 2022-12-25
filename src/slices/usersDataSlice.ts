import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { userDataInterface } from "../types";

const initialUserState: userDataInterface[] = [
  {
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
  },
];

export const usersDataSlice: Slice = createSlice({
  name: "usersData",
  initialState: initialUserState,
  reducers: {
    addUsersData: (
      state: userDataInterface[],
      { payload }: PayloadAction<userDataInterface[]>
    ) => {
      return payload
    },
  },
});

export const { addUsersData } = usersDataSlice.actions;

export default usersDataSlice.reducer;
