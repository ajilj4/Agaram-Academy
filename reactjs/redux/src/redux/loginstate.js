import { createSlice } from '@reduxjs/toolkit'

export const counterlogin = createSlice({
  name: 'user',
  initialState: {
    // email: "ajil@gmail.com",
    // password: "12345",
    loginuser: {}
  },
  reducers: {
    setlogin: (state,action) =>{
        state.loginuser=action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setlogin } = counterlogin.actions

export default counterlogin.reducer