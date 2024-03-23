'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface packContainerState {
  isclickBtn: boolean
}
const initialState: packContainerState = {
  isclickBtn: false,
}

const packContainerStateSlice = createSlice({
  name: 'packContainerState',
  initialState,
  reducers: {
    clickPackContainer: (state) => {
      state.isclickBtn = true
    },
  },
})

export const { clickPackContainer } = packContainerStateSlice.actions
export default packContainerStateSlice.reducer
