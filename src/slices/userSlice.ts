import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { userType } from '../types';

const initalState: userType = {
  email: { address: "" },
  password: "",
  passwordConfirmation: "",
  username: "",
  profile: { firstName: "", lastName: "" },
};

export const userSlice: Slice = createSlice({
  name: 'user',
  initialState: initalState,
  reducers: {
    loggedIn: (state: userType, action: PayloadAction<userType>) => {
        state.email.address = action.payload.email.address
        state.password = action.payload.password
        state.passwordConfirmation = action.payload.passwordConfirmation
        state.username = action.payload.username
        // if (state.profile.firstName !== undefined) {
        //   state.profile.firstName = action.payload.profile?.firstName
        // }
        // state.profile.lastName = action.payload.profile?.lastName
    },
    loggedOut: (state: userType) => {
      state = initalState
    }
  }
})

export const { loggedIn, loggedOut } = userSlice.actions

export default userSlice.reducer