import { configureStore } from '@reduxjs/toolkit'

import homeSlice from './homeSlice'

//create a redux store
export const store = configureStore({
  reducer: {
    home : homeSlice
  },
})