import { createSlice } from '@reduxjs/toolkit'

export const valueSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    dataDone: [],
  },
  reducers: {
    setDataValue: (state, action) => {
      state.data.unshift(action.payload)
    },
    setDoneTodo: (state, action) => {
      state.dataDone.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((data) => data !== action.payload)
    },
    deleteDone: (state, action) => {
      state.dataDone = state.dataDone.filter((data) => data !== action.payload)
    },
  },
})

export const { setDataValue, setDoneTodo, deleteTodo, deleteDone } =
  valueSlice.actions

export default valueSlice.reducer
