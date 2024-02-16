import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './redux/user'
import counterlogin from './redux/loginstate'


export default configureStore({
  reducer: {
    counter: counterSlice,
    user: counterlogin
  }
})