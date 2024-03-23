'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  isOpen: boolean
}
const initialState: AppState = {
  isOpen: false,
}

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    openLingTang: (state) => {
      state.isOpen = true
    },
  },
})

export const { openLingTang } = appStateSlice.actions
export default appStateSlice.reducer
