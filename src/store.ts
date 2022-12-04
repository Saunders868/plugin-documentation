// import { createSlice, configureStore } from '@reduxjs/toolkit'

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     email: "",
//     password: "",
//     passwordConfirm: "",
//     username: "",
//     firstName: "",
//     lastName: "",
//     accessToken: "",
//     refreshToken: "",
//   },
//   reducers: {
//     email: state => {
//       state.email = 
//     },
//     decremented: state => {
//       state.value -= 1
//     }
//   }
// })

// export const { incremented, decremented } = counterSlice.actions

// const store = configureStore({
//   reducer: counterSlice.reducer
// })

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}