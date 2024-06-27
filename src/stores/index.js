import { configureStore } from '@reduxjs/toolkit'
import { booleanSlice } from '../Slices/booleanSlice'
import { valueSlice } from '../Slices/dataSlice'

export const store = configureStore({
  reducer: {
    boolean: booleanSlice.reducer,
    value: valueSlice.reducer,
  },
})
