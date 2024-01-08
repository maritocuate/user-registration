import { Inputs } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: [] as Inputs[],
  reducers: {
    addUser: (state, action: PayloadAction<Inputs>) => {
      state.push(action.payload)
    },
  },
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer
