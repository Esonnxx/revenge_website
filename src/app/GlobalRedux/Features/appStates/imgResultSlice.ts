'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ImageResultState {
  selectedImage: string
}
const initialState: ImageResultState = {
  selectedImage: '',
}

const imgResultSlice = createSlice({
  name: 'imgResultState',
  initialState,
  reducers: {
    setImgResult(state, action: PayloadAction<string>) {
      state.selectedImage = action.payload
    },
  },
})
export const { setImgResult } = imgResultSlice.actions
export default imgResultSlice.reducer
