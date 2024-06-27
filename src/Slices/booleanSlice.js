import { createSlice } from '@reduxjs/toolkit'

export const booleanSlice = createSlice({
  name: 'boolean',
  initialState: {
    value: 0,
    todoList: false,
    doneList: false,
  },
  reducers: {
    toggleTodoList: (state) => {
      state.todoList = !state.todoList
    },
    toggleDoneList: (state) => {
      state.doneList = !state.doneList
    },
  },
})

export const { toggleTodoList, toggleDoneList } = booleanSlice.actions

export default booleanSlice.reducer
